"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";
import {
  createTodo,
  completeTodo as completeTodoAction,
  deleteTodo as deleteTodoAction,
} from "../Database/actions";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  //server-fetched list from props
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos ?? []);
  const [newTodoText, setNewTodoText] = useState("");
  
  // adds an item by... calling the server, then updating the local state
  const addItem = async () => {
    const text = newTodoText.trim();
    if (!text) return;

    const row = await createTodo(text);
    if (!row) return;

    setTodos((prev) => [...prev, row]);
    setNewTodoText("");
  };
  
  // toggle complete: call server, then update local state
  const toggleComplete = async (id: number) => {
    const t = todos.find((x) => x.id === id);
    if (!t) return;

    const updated = await completeTodoAction(id, !t.completed);
    setTodos((prev) =>
      prev.map((x) => (x.id === id ? { ...x, completed: updated.completed } : x))
    );
  };

  // DELETE -> calls server, then removes locally
  const deleteTodo = async (id: number) => {
    await deleteTodoAction(id);
    setTodos((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>

      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((todo) => (
          <li key={todo.id} className="w-full">
            <Todo
              {...todo}
              onToggle={() => toggleComplete(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 w-full items-stretch">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={addItem}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};