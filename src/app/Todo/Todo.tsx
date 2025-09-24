"use client";

import { IconX } from "@tabler/icons-react";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoProps extends TodoItem {
  onToggle: () => void;
  onDelete: () => void;
  disabled?: boolean;
}

export const Todo = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  disabled = false,
}: TodoProps) => {
  return (
    <div
      className={`flex flex-row gap-[32px] p-3 mb-2 rounded-lg border ${
        completed
          ? "bg-gray-100 opacity-60 border-gray-300"
          : "bg-white border-gray-200"
      } ${disabled ? "opacity-50" : ""}`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        disabled={disabled}
        className="mt-1"
      />
      <div
        className={`flex-grow cursor-pointer ${completed ? "line-through text-gray-500" : ""} ${disabled ? "cursor-not-allowed" : ""}`}
        onClick={disabled ? undefined : onToggle}
      >
        {text}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        disabled={disabled}
        className="text-red-500 hover:text-red-700 p-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IconX size={16} />
      </button>
    </div>
  );
};
