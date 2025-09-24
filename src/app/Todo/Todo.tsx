"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};
export const Todo = ({ id, text, completed }: TodoItem) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <div className="flex flex-row gap-[32px]">
      <div>{text}</div>
    </div>
  );
};
