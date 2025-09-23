"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div className="flex items-center flex-row gap-[32px]">
      <div>{text}</div>
    </div>
  );
};
