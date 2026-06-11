import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY)
    throw new Error("OPENAI_API_KEY is not set in environment variables.");

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateContent<T>(systemPrompt: string, userPrompt: string): Promise<T> {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ]
    });

    const raw = response.choices[0]?.message?.content || "{}";

    if (!raw) throw new Error("AI returned empty response");

    return JSON.parse(raw) as T;
}