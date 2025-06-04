
const MODEL_NAME = "gemini-2.5-pro"; // Ensure correct model name
const BASE_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // ✅ Correct for Vite

console.log("API Key:", API_KEY); // Debugging step


export async function main(prompt) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    
     // Adjust based on API response format
  } catch (error) {
    console.error("API request failed:", error);
    return null;
  }
}






