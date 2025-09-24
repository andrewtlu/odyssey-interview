"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>([
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
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = () => {
    if (newTodoText.trim() === "") return;
    
    const newTodo: TodoItem = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      text: newTodoText,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo key={val.id} {...val} />
        ))}
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
