
// Use direct import from @google/genai
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Servant } from "../types.ts";

const SYSTEM_LORE = `
You are TRISMEGISTUS II, the advanced tactical computer of Chaldea Security Organization. 
Your tone is efficient, analytical, and respectful to Chaldea staff.
You provide critical Saint Graph data and tactical analysis to preserve Human Order.
`;

const SHEBA_INSTRUCTION = `
You are the SHEBA LENS Interface. You specialize in multiversal observation, probability calculation, and Human Order stability analysis.
Provide responses in a format that looks like a technical report:
[PROBABILITY: XX%]
[STABILITY_INDEX: XX]
[ANALYSIS]: (Your detailed response)
Maintain a clinical, high-tech tone. Use terms like Spiritrons, Singularities, and Human Order Foundation.
`;

const FALLBACK_RESPONSES = [
  "TRISMEGISTUS II is currently in low-power simulation mode. API link not established.",
  "Analysis complete: Spiritron density nominal. Caution advised in Sector B.",
  "Warning: Local temporal fluctuation detected. Rayshift schedules may be affected by 0.002 seconds.",
  "Master Ritsuka, please consult Director Da Vinci for higher-level authorization.",
  "Kyle-001 has been spotted near the cooling vents again. No further comment."
];

/**
 * Generates structured Servant data using Gemini AI
 */
export const generateServantData = async (name: string): Promise<Servant> => {
  // Always initialize client with direct environment variable access as required
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the legendary figure "${name}" and provide a detailed Saint Graph profile.`,
      config: {
        systemInstruction: SYSTEM_LORE,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            name: { type: Type.STRING },
            class: { type: Type.STRING },
            rarity: { type: Type.NUMBER },
            description: { type: Type.STRING },
            stats: {
              type: Type.OBJECT,
              properties: {
                atk: { type: Type.NUMBER }, hp: { type: Type.NUMBER },
                str: { type: Type.STRING }, end: { type: Type.STRING },
                agi: { type: Type.STRING }, man: { type: Type.STRING },
                lck: { type: Type.STRING }, np: { type: Type.STRING },
              },
              required: ["atk", "hp", "str", "end", "agi", "man", "lck", "np"],
            },
            noblePhantasm: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING }, rank: { type: Type.STRING }, type: { type: Type.STRING },
              },
              required: ["name", "rank", "type"],
            },
          },
          required: ["id", "name", "class", "rarity", "description", "stats", "noblePhantasm"],
        },
      },
    });

    // Access .text property directly
    const text = response.text || "{}";
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("TRISMEGISTUS II Generation Error:", error);
    return {
      id: `ERR-${Math.floor(Math.random() * 1000)}`, name, class: "Unknown", rarity: 1, description: "Saint Graph data extraction failed. Local buffer only.",
      stats: { atk: 0, hp: 0, str: "E", end: "E", agi: "E", man: "E", lck: "E", np: "E" },
      noblePhantasm: { name: "System Failure", rank: "E", type: "Unknown" }
    };
  }
};

/**
 * Specialized queries for the SHEBA Lens
 */
export const querySheba = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: SHEBA_INSTRUCTION,
      }
    });
    return response.text || "ERROR: CONNECTION_TIMEOUT";
  } catch (error) {
    console.error("SHEBA Analysis Error:", error);
    return "ERROR: SPIRITRON_DECOHERENCE_DETECTED";
  }
};

/**
 * Handles conversational interactions for the Rayshift console
 */
export const chatWithStaffAI = async (message: string, history: any[] = []) => {
  // Always initialize client with direct environment variable access
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // For single turn or non-persistent chat, generateContent is efficient
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_LORE,
      }
    });

    // Access .text property directly
    return response.text || FALLBACK_RESPONSES[0];
  } catch (error) {
    console.error("TRISMEGISTUS II Communication Error:", error);
    return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
  }
};
