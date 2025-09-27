"use client";

import { IconTrash } from "@tabler/icons-react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoProps = TodoItem & {
  onToggleCompletion: () => void;
  onDelete: () => void;
};

export const Todo = ({
  id,
  text,
  completed,
  onToggleCompletion,
  onDelete,
}: TodoProps) => {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      onClick={onToggleCompletion}
      className={`flex flex-row gap-[32px] items-center p-4 rounded-xl mb-3 shadow-sm transition cursor-pointer
        ${completed ? "bg-pink-100 opacity-80" : "bg-purple-100 hover:bg-purple-200"}
      `}
    >
      <input
        type="checkbox"
        checked={completed}
        readOnly
        className="w-5 h-5 accent-pink-400 pointer-events-none"
      />
      <div
        className={`text-base font-semibold text-black flex-grow ${completed ? "line-through" : ""}`}
      >
        {text}
      </div>
      <button
        onClick={handleDeleteClick}
        className="p-1 hover:bg-red-200 rounded-full transition-colors"
        aria-label="Delete todo"
      >
        <IconTrash size={16} className="text-red-600" />
      </button>
    </div>
  );
};
