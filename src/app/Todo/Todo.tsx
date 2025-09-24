"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};
export const Todo = ({ id, text, completed }: TodoItem) => {
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
        readOnly
        className="mt-1"
      />
      <div className={completed ? 'line-through text-gray-500' : ''}>{text}</div>
    </div>
  );
};
