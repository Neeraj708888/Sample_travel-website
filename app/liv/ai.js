import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateDestinationContent(destination) {
    const prompt = `
  Write SEO optimized travel content for ${destination}.
  Include:
  - Introduction
  - Top attractions
  - Best time to visit
  - Travel tips
  - 800-1000 words
  Also generate:
  - Meta title (max 60 chars)
  - Meta description (max 155 chars)
  Return response in JSON format:
  {
    content: "",
    meta_title: "",
    meta_description: ""
  }
  `;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
    });

    // return JSON.parse(response.choices[0].message.content);

    let text = response.choices[0].message.content;

    // Remove possible markdown wrappers
    text = text.replace(/```json|```/g, "").trim();

    try {
        return JSON.parse(text);
    } catch (error) {
        console.error("AI JSON Parse Error:", text);
        throw new Error("Invalid AI JSON response");
    }

}
