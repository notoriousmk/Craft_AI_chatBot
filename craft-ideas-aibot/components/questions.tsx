interface QuestionsProps {
  handleClick: (htmlString: string) => void;
}

const Questions = ({ handleClick }: QuestionsProps) => {
  const questions = [
    "What are some easy DIY crafts for beginners?",
    "How can I repurpose household items for DIY projects?",
    "What are some fun craft projects for kids?",
    "How do I choose the right materials for my DIY project?",
    "What are some seasonal or holiday-themed craft ideas?",
    "What are some budget-friendly DIY craft ideas?",
    "How can I make my DIY projects look professional?",
    "What are some popular trends in DIY crafts right now?",
    "How can I start a DIY project if I have no crafting experience?",
    "How can I organize my craft supplies effectively?",
  ];

  return (
    <div className="">
      
      <div className="md-4 grid grid-cols-2 gap-1 px-2  sm:px-0">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => handleClick(question)}
            className="cursor-pointer rounded-lg border text-white p-4 hover:text-black hover:bg-zinc-50 dark:bg-zinc-900"
          >
            <p>{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
