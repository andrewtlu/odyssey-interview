"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";

export const TodoList = ({ todos }: { todos?: TodoItem[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dummyTodos, setDummyTodos] = useState<TodoItem[]>([
    {
      text: "item 1",
      completed: false,
    },
    {
      text: "item 2",
      completed: false,
    },
    {
      text: "item 3",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md">
        {
          // use todo prop if provided, or use dummy todo if not provided
          (todos ? todos : dummyTodos).map((val) => (
            <Todo {...val} />
          ))
        }
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer">
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
