"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useEffect, useState } from "react";

import { createTodo, completeTodo, deleteTodo, fetchAllTodos } from "../Database/actions";


export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos ?? []);
  const [newTodoText, setNewTodoText] = useState("");

  const addNewTodo = async () => {
    if (!newTodoText.trim()) {
      return;
    }
    const newTodo = await createTodo(newTodoText);
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  }

  const toggleCompletion = async (id: number) => {
    const updated = await completeTodo(id);
    if (!updated) return;

    setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
  };

  const toggleDeletion = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await fetchAllTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);


return (
  <>
    <div className="font-medium text-2xl">My Todo List</div>
    <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-gray-200 w-full px-2 py-1 rounded-md flex flex-col gap-2">
      {todos.map((val) => (
        <Todo todo={val} key={val.id} onToggle={toggleCompletion} onDelete={toggleDeletion} />
      ))}
    </ul>
    <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
      <input
        placeholder="Todo text"
        className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={addNewTodo} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer">
        <IconPlus />
        Add Item
      </button>
    </div>
  </>
);
};
