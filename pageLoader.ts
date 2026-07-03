import { chromium } from "playwright";
import type { Browser, Page } from "playwright";

const BASE_URL = "http://localhost:3000/events/artist-mngmt/fashion-design";
const BASE_PATH = "/events/artist-mngmt/fashion-design";
const MAX_DEPTH = 5;
const SLOW_MO = 300;

// ---- AI SECTION SELECTORS (apne actual HTML ke hisaab se yahan update karo) ----
const AI_SECTION_SELECTORS = [
    '[data-section="ai-section-1"]',
    '[data-section="ai-section-2"]',
    '[data-section="ai-section-3"]',
];

const AI_WAIT_TIMEOUT = 90000; // max 90 sec wait per section, safety ke liye
const FALLBACK_WAIT = 60000;   // agar selectors match na ho to fixed fallback

const visited = new Set<string>();

function cleanUrl(url: string): string {
    return url.split("?")[0].split("#")[0];
}

async function waitForAiContent(page: Page, indent: string): Promise<void> {
    console.log(`${indent}Waiting for AI-generated sections...`);

    try {
        // Teeno sections ka parallel wait — jo pehle load ho jaaye
        await Promise.all(
            AI_SECTION_SELECTORS.map((selector) =>
                page.waitForSelector(`${selector}:not(:empty)`, {
                    timeout: AI_WAIT_TIMEOUT,
                    state: "visible",
                })
            )
        );
        console.log(`${indent}✓ All AI sections loaded successfully.`);
    } catch (error) {
        console.log(
            `${indent}⚠ Warning: Some AI sections didn't load within timeout — falling back to fixed wait.`
        );
        console.log(`${indent}  Reason: ${(error as Error).message}`);
        // Fallback — agar selectors match nahi hue ya timeout hua, fixed wait karo
        await page.waitForTimeout(FALLBACK_WAIT);
    }
}

async function crawlPage(
    browser: Browser,
    url: string,
    depth: number = 0
): Promise<void> {
    const cleanedUrl = cleanUrl(url);

    if (visited.has(cleanedUrl) || depth > MAX_DEPTH) return;
    visited.add(cleanedUrl);

    const indent = "  ".repeat(depth);
    console.log(`${indent}Visiting (depth ${depth}):`, cleanedUrl);

    const page = await browser.newPage();

    try {
        await page.goto(cleanedUrl, {
            waitUntil: "domcontentloaded",
            timeout: 15000,
        });

        // ---- AI content ka smart wait ----
        await waitForAiContent(page, indent);

        const links = await page.$$eval(
            "a",
            (anchors, basePath) => {
                const unique = new Set<string>();
                anchors.forEach((a) => {
                    try {
                        const u = new URL((a as HTMLAnchorElement).href);
                        if (u.pathname.startsWith(basePath)) {
                            unique.add(u.href);
                        }
                    } catch {
                        // invalid href, skip karo
                    }
                });
                return [...unique];
            },
            BASE_PATH
        );

        await page.close();

        for (const link of links) {
            await crawlPage(browser, link, depth + 1);
        }
    } catch (error) {
        console.error(`${indent}Error on ${cleanedUrl}:`, (error as Error).message);
        await page.close();
    }
}

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: SLOW_MO,
    });

    console.log("Starting crawl...\n");
    await crawlPage(browser, BASE_URL, 0);

    console.log("\n=== Crawl Complete ===");
    console.log(`Total unique pages visited: ${visited.size}\n`);
    [...visited].sort().forEach((url) => console.log(" -", url));

    await browser.close();
})();