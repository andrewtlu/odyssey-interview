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
}

export const Todo = ({ id, text, completed, onToggle, onDelete }: TodoProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <div className="flex flex-row gap-[32px] p-3 mb-2 rounded-lg border ${
      completed
      ? 'bg-gray-100 opacity-60 border-gray-300'
      : 'bg-white border-gray-200'
      }">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="mt-1"
      />
      <div 
        className={`flex-grow cursor-pointer ${completed ? 'line-through text-gray-500' : ''}`}
        onClick={onToggle}
      >
        {text}
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }} 
        className="text-red-500 hover:text-red-700 p-1"
      >
      <IconX size={16} />
      </button>
    </div>
  );
};
