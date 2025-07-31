
import { type CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";


export const maxDuration = 60;






export async function POST(request: Request){
    const { messages }: {messages: CoreMessage[]} = await request.json();

    const result = await streamText({
        model: google('models/gemini-1.5-flash-latest'),
        system: "You are a helpful assistant.You do the greetings. You provide crafting ideas and DIY projects. You explain those ideas. If user ask you something else which is not related to craft and DIY projects reply user I am a craft ai-bot.",
        messages,
    })

    

    return result.toAIStreamResponse();
}



