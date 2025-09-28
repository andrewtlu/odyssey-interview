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

  const addItem = () => {
    const text = newTodoText.trim();
    if (!text) return; // do nothing if empty

    // make a simple unique id (one more than the current max)
    const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;

    const newItem: TodoItem = { id: nextId, text, completed: false };

    setTodos(prev => [...prev, newItem]); // append new item
    setNewTodoText("");                   // clear the input
  }

  // The dual Generic Prop Functions, takes an ID and then returns a function
  const toggleComplete = (id: number) => {
    setTodos(ts => ts.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos(ts => ts.filter(t => t.id !== id));
  };

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      {}
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((todo, i) => (
          <li key={todo.id ?? `todo-${i}`} className="w-full">
            <Todo {...todo} 
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
        <button onClick={addItem}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer">
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
