"use client";
import React, { useEffect, useState } from "react";
import Questions from "./questions";
import { useChat } from "ai/react";

const ChatComponent: React.FC = () => {
  const { input, setInput, handleInputChange, handleSubmit, messages } =
    useChat({
      api: "/api/chat",
    });
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const handleClick = (htmlString: string) => {
    setInput(htmlString);
    setShouldSubmit(true);
  };

  useEffect(() => {
    if (shouldSubmit) {
      handleSubmit();
      setShouldSubmit(false);
    }
  }, [shouldSubmit]);

  return (
    <>
      
      <div className="mx-auto sm:max-w-2xl sm:px-4 ">
      <Questions handleClick={handleClick} />
    

        <div className=" bg-slate-800 pb-[100px] flex flex-col content-center text-white rounded-lg mt-1 ">
          {messages.map((message) =>
            message.role === "assistant" ? (
              <div key={message.id}>
                <h3 className="text-lg font-semibold mt-2 m-2">BOT:</h3>
                <p className="text-s font-semibold mt-2 m-2">{message.content}</p>
              </div>
            ) : (
              <div key={message.id}>
                <h3 className="text-lg font-semibold mt-2 m-2">User:</h3>
                <p className="text-s font-semibold mt-2 m-2">{message.content}</p>
              </div>
            )
          )}
        </div>

        
        <form
        className="fixed bottom-0 w-full mx-auto bg-slate-800 sm:max-w-[40rem] rounded-t-lg flex gap-2"
        onSubmit={handleSubmit}
      >
        <textarea
          className="w-full text-start p-2 align-center border bg-slate-600 rounded-md"
          placeholder="Type something here..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={!input}
          className="rounded-md border bg-blue-600 "
        >
          Send Message
        </button>
        </form>
        </div>
      
    </>
  );
};

export default ChatComponent;
