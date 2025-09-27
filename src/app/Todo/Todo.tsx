"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div
      className={`flex flex-row gap-[32px] items-center p-4 rounded-xl mb-3 shadow-sm transition
        ${completed ? "bg-pink-100 opacity-80" : "bg-purple-100 hover:bg-purple-200"}
      `}
    >
      <input
        type="checkbox"
        checked={completed}
        readOnly
        className="w-5 h-5 accent-pink-400"
      />
      <div
        className={`text-base font-semibold text-black ${completed ? "line-through" : ""}`}
      >
        {text}
      </div>
    </div>
  );
};
