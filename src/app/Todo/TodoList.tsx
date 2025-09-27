"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(
    initialTodos ?? [
      { id: 1, text: "item 1", completed: false },
      { id: 2, text: "item 2", completed: false },
      { id: 3, text: "item 3", completed: true },
    ]
  );
  const [newTodoText, setNewTodoText] = useState("");

  const addNewTodo = () => {
    const text = newTodoText.trim();
    if (!text) return;

    setTodos((prev) => [
      ...prev,
      { id: todos.length+1, text, completed: false },
    ]);
    setNewTodoText("");
  };

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>

      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg- w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo key={val.id} id={val.id} text={val.text} completed={val.completed} />
        ))}
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") addNewTodo(); }} // enter to add
        />
        <button
          onClick={addNewTodo}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};