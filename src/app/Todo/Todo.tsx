"use client";

import { IconTrash } from "@tabler/icons-react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoProps = TodoItem & {
  onToggle: () => void;
  onDelete: () => void;
};

export const Todo = ({ id, text, completed, onToggle, onDelete }: TodoProps) => {
  return (
    <li
      className="px-2 flex items-center justify-between gap-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-2" onClick={onToggle}>
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="h-5 w-5 rounded text-blue-500 focus:ring-blue-500"
        />
        <span
          className={
            completed
              ? "line-through text-red-500 opacity-70"
              : "text-green-400"
          }
        >
          {text}
        </span>
      </div>

      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700"
        aria-label="Delete todo"
      >
        <IconTrash size={18} />
      </button>
    </li>
  );
};
