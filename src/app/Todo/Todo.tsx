"use client";

/* the information about the todo item,
  imported to TodoList.tsx  */
export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div className="flex flex-row gap-[32px]">
      <div>{text}</div>
    </div>
  );
};
