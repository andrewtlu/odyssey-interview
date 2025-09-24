"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoProps {
  todo: TodoItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const Todo: React.FC<TodoProps> = ({
  todo: { id, text, completed },
  onToggle,
  onDelete,
}) => {
  return (
    <div
      className={`flex flex-row items-center rounded-sm px-4 py-2 cursor-pointer
        ${completed ? "bg-green-500 opacity-60" : "bg-red-400"}`}
      onClick={() => onToggle(id)}
    >
      <div>{text}</div>
      <div className="ml-auto flex items-center gap-3">
        {completed && <div className="text-white text-lg">✔</div>}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="text-red-800 font-black"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
