// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

const APikey = "AIzaSyDHScBV5FxO30uGf3su7yxuaAeBnbM2Hts"; // Replace with a secure method in production

async function main() {
  const ai = new GoogleGenAI({
    apiKey: APikey,
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro-preview-05-06';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: "What is the capital of France?",
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
