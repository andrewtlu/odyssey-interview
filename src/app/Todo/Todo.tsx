"use client";

/* the information about the todo item,
  imported to TodoList.tsx  */
export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed }: TodoItem) => {
  return (
    <div className="flex flex-row gap-[32px] p-1 m-1 indent-1.5 bg-teal-800 rounded-md">
      <label>
        <input type="checkbox" checked={completed} className="size-3" />
      </label>
      <div className={completed ? "line-through opacity-50" : ""}>
        <div>{text}</div>
      </div>
    </div>
  );
};
