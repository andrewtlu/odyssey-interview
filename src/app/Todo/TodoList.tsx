"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";
import { createTodo, completeTodo, deleteTodo, fetchAllTodos } from "../Database/actions";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos || []);
  const [newTodoText, setNewTodoText] = useState("");
  const [isPending, startTransition] = useTransition();
  
  const addTodo = () => {
    if (newTodoText.trim() === "") return;
    
    startTransition(async () => {
      const newTodo = await createTodo(newTodoText.trim());
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    });
  };

  const toggleTodo = (id: number, currentCompleted: boolean) => {
    startTransition(async () => {
      const updatedTodo = await completeTodo(id, !currentCompleted);
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    });
  };

  const removeTodo = (id: number) => {
    startTransition(async () => {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  const refreshTodos = () => {
    startTransition(async () => {
      const freshTodos = await fetchAllTodos();
      setTodos(freshTodos);
    });
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="font-medium text-2xl">My Todo List</div>
        <button 
          onClick={refreshTodos}
          disabled={isPending}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
          title="Refresh todos"
        >
          <IconRefreshCw size={20} className={isPending ? 'animate-spin' : ''} />
        </button>
      </div>
      
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo 
            key={val.id} 
            {...val} 
            onToggle={() => toggleTodo(val.id, val.completed)}
            onDelete={() => removeTodo(val.id)}
            disabled={isPending}
          />
        ))}
      </ul>
      
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          disabled={isPending}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button 
          onClick={addTodo}
          disabled={isPending || newTodoText.trim() === ""}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};