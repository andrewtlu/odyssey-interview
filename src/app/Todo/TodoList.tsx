"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";

export const TodoList = ({ todos }: { todos?: TodoItem[] }) => {
  const dummyTodos: TodoItem[] = [
    {
      id: 1,
      text: "item 1",
      completed: false,
    },
    {
      id: 2,
      text: "item 2",
      completed: false,
    },
    {
      id: 3,
      text: "item 3",
      completed: true,
    },
  ];

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      {/* TODO: fix me! (task 1) */}
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-row">
        {
          // use todo prop if provided, or use dummy todo if not provided
          (todos ? todos : dummyTodos).map((val) => (
            // TODO: fix me! (task 1)
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
