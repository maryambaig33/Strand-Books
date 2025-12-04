import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getBookRecommendation = async (userQuery: string, contextBooks: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I seem to have lost my glasses (API Key missing). Please check the configuration.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a quintessential Strand Book Store employee in New York City. 
    You are knowledgeable, slightly opinionated but charming, and deeply passionate about books. 
    You know about the "18 Miles of Books". 
    
    Your goal is to recommend books to the customer based on their query.
    You can reference the books currently on our digital shelves provided in the context, but you are also free to recommend classics or hidden gems not in the immediate list if they fit the vibe perfectly.
    
    Keep your response relatively short (under 100 words), conversational, and witty. 
    If suggesting a book from the provided list, mention it specifically.
    
    Context (Current Shelf): ${contextBooks}`;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having a bit of trouble finding that in the stacks right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I got distracted by a rare first edition. Can you ask that again?";
  }
};
