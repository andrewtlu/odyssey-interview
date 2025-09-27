"use client";
import { on } from "events";
import { useState } from "react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const Todo = ({ id, text, completed, onToggle, onDelete }: TodoItem) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => {
        setClicked(!completed);
        onToggle(id);
      }}
      className={`flex flex-row items-center gap-3 
    rounded-2xl px-4 py-3 m-2 cursor-pointer 
    bg-gradient-to-r from-blue-500 to-teal-600
    hover:scale-[1.01] active:scale-[0.99] 
    transition-all duration-300 ease-out
    ${clicked ? "opacity-70 ring-2 ring-teal-400" : "opacity-100"}
  `}
    >
      <input
        type="checkbox"
        checked={completed}
        readOnly
        className="w-4 h-4 accent-teal-500 cursor-pointer"
      />
      <div className="text-white font-medium tracking-wide">{text}</div>
      <button
        className="ml-auto px-2 py-0 rounded-lg 
             bg-white hover:bg-red-500 active:bg-red-600
             cursor-pointer
             text-black font-semibold text-md
             shadow-md hover:shadow-lg
             hover:scale-105 active:scale-95
             transition-all duration-200 ease-out"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        ✕
      </button>
    </div>
  );
};
