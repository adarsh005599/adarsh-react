import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "KEYAIzaSyBwEHDHlxnJh1WQPJSUTAJgoPqeVN1VoNI"

const MODEL_NAME = "gemini-1.0-pro";

async function runGeminiPrompt(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = await result.response;
    console.log("✅ Gemini Response:", response.text());
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

export  default runGeminiPrompt
