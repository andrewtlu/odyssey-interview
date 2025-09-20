"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    // TODO: finish me!
    <div className="flex flex-row gap-[32px]">
      <div>{text}</div>
    </div>
  );
};
