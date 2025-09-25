"use client";
import { useState } from "react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  const [clicked, setClicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked(event.target.checked);
  };

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`flex flex-row gap-[4px] bg-blue-500 rounded-2xl p-2 m-1 hover:scale-[1.02] transition-transform  ${clicked ? "opacity-70" : "opacity-100"}`}
    >
      <input type="checkbox" checked={clicked}/>
      <div>{text}</div>
    </div>
  );
};
