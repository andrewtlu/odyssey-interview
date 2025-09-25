"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";
import {
  createTodo,
  completeTodo,
  deleteTodo,
} from "../Database/actions";

export const TodoList = ({ initialTodos }: { initialTodos: TodoItem[] }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  async function handleAdd() {
    if (newTodoText.trim() === "") return;

    const newTodo = await createTodo(newTodoText);
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoText("");
  }

  async function handleToggle(id: number, completed: boolean) {
    const updated = await completeTodo(id, !completed);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  }

  async function handleDelete(id: number) {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      <ul className="font-mono list-inside items-center gap-2 list-decimal text-sm/6 text-center sm:text-left bg-gray-800 w-full px-0 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo
            key={val.id}
            id={val.id}
            text={val.text}
            completed={val.completed}
            onToggle={() => handleToggle(val.id, val.completed)}
            onDelete={() => handleDelete(val.id)}
          />
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
          onClick={handleAdd}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
