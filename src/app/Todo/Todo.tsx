"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div className="flex flex-row gap-[32px] bg-blue-100">
      <div>{text}</div>
    </div>
  );
};
