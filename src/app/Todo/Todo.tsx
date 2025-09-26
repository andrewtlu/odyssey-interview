"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div className="flex flex-row gap-[32px] rounded-lg bg-blue-100 border-2 border-black text-black">
      <input type="checkbox" checked={completed}  />
      <div className="flex-1">{text}</div>
      <button className ="border-2 border-black text-red-500 bg-gray-100 rounded-lg hover:bg-black"> Delete</button>
    </div>
  );
};
