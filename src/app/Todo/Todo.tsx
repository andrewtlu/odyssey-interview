"use client";
import { TodoList } from "./TodoList";

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
        <input
          type="checkbox"
          className="size-3"
          checked={completed}
          onChange={() => {
            completed = !completed;
          }} // not working so far; but React warning on "lack onChange" disappears
        />
      </label>
      <div className={completed ? "line-through opacity-50" : ""}>
        <div>{text}</div>
      </div>
    </div>
  );
};
