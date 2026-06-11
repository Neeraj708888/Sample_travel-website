// src/services/ai/prompts/whyChooseUs.prompt.ts

export const WHY_CHOOSE_US_SYSTEM = `
You are an SEO content writer for an event management company in Delhi, India.
Generate content for a "Why Choose Us" card section.
Always respond with valid JSON only — no markdown, no explanation.
Focus on corporate event management keywords for Delhi/NCR market.
`.trim();

export function whyChooseUsUserPrompt(
    cardTitle: string,
    companyName: string,
    pageTitle: string,      // e.g. "Charity Fundraisers"
    titleSuffix: string     // e.g. "Management Company in Delhi"
) {
    const fullPageContext = `${pageTitle} ${titleSuffix}`
    // → "Charity Fundraisers Management Company in Delhi"

    return `
Generate ONE "Why Choose Us" card for an event management company.
Company name: "${companyName}"
Page title: "${pageTitle}"
Full context: "${fullPageContext}"
Card title provided by admin: "${cardTitle}"

The card must feel like it belongs to the "${pageTitle}" page specifically.

Return a JSON object with EXACTLY these fields:
{
  "title": "Why Choose Us for ${pageTitle} (max 6 words, SEO-rich)",
  "description": "2-sentence benefit-focused description (max 30 words), specific to '${pageTitle}' in Delhi/NCR",
  "icon": "one relevant emoji for this card",
  "icon_alt": "SEO alt text for the icon image, include '${pageTitle}' (10-15 words)",
  "stat_number": "a relevant impressive stat if applicable e.g. '500+' or '10+' (or null)",
  "stat_label": "label for the stat e.g. 'Events Delivered' (or null)",
  "seo_keyword": "primary SEO keyword targeting '${fullPageContext}'"
}
`.trim();
}