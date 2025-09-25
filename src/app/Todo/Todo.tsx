"use client";
import { useState } from "react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
  onClick={() => setClicked(!clicked)}
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
    checked={clicked}
    readOnly
    className="w-4 h-4 accent-teal-500 cursor-pointer"
  />
  <div className="text-white font-medium tracking-wide">{text}</div>
</div>
  );
};
