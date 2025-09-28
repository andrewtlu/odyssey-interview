"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Todo = ({ id, text, completed }: { id: number; text: string; completed: boolean }) => {
  return (
    <div
      className={`bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors
        ${completed ? "opacity-70" : ""} flex items-center gap-2`}
    >
      <input type="checkbox" checked={completed} readOnly className="h-4 w-4 accent-white" />
      <div className={completed ? "line-through" : ""}>{text}</div>
    </div>
  );
};
