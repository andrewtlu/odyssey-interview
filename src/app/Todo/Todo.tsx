"use client";

export type TodoItem = {
  text: string;
  completed: boolean;
};

export const Todo = ({ text, completed }: TodoItem) => {
  return (
    // TODO: finish me!
    <div className="flex flex-row gap-[32px]">
      <div>{text}</div>
    </div>
  );
};
