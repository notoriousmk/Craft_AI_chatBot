
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



// import { useState } from 'react';

// export const useChat = ({ api/chat }) => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const text = e.target.text || input;

//     const newMessage = { role: 'user', content: text };
//     setMessages([...messages, newMessage]);

//     const response = await fetch(api/chat, {
//       method: 'POST',
//       body: JSON.stringify({ messages: [...messages, newMessage] }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       console.error('Error:', response.statusText);
//       return;
//     }

//     const data = await response.json();
//     setMessages([...messages, newMessage, { role: 'assistant', content: data.reply }]);
//     setInput('');
//   };

//   return {
//     input,
//     handleInputChange,
//     handleSubmit,
//     messages
//   };
// };
