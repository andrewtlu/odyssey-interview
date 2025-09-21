"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div
  className={`flex flex-row gap-[32px] rounded-sm items-center px-4 py-2
    ${completed ? 'bg-green-500 opacity-60' : 'bg-red-400'}`}
>
  <div>{text}</div>
  {completed && (
    <div className="ml-auto text-white text-lg">
      ✔
    </div>
  )}
</div>
  );
};
