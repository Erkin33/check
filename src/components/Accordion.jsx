import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-[.9em] text-center text-left py-4 text-lg bg-[#CE8B39] text-[white]  flex justify-around items-center"
      >
        {title}
        <span className={`transform text-[2vh] transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-600">{content}</div>}
    </div>
  );
}
