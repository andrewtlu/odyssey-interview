"use client";

/* the information about the todo item,
  imported to TodoList.tsx  */
export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

//
export type TodoProps = TodoItem & {
  onToggle: () => void;
  onDelete: () => void;
};

export const Todo = ({ text, completed, onToggle, onDelete }: TodoProps) => {
  return (
    <div className="flex flex-row gap-[32px] p-1 m-1 indent-1.5 dark:bg-teal-800 bg-teal-400 rounded-md">
      <label className="mt-1.5">
        <input
          type="checkbox"
          className="size-3.5"
          checked={completed}
          onChange={onToggle}
        />
      </label>
      <div className={completed ? "line-through opacity-50" : ""}>
        <div className="mt-1">{text}</div>
      </div>
      <button
        type="button"
        className="font-sans font-medium ml-auto pl-1.5 pr-1.5 m-0.5 rounded-md bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};
