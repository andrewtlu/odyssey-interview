"use client";

import { IconPlus, IconRefresh } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState, useTransition } from "react";
import { createTodo, toggleTodo, deleteTodo, fetchAllTodos } from "../Database/actions";
import { useRouter } from "next/navigation";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos || []);
  const [newTodoText, setNewTodoText] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const addTodo = async () => {
    if (newTodoText.trim()) {
      const text = newTodoText.trim();
      setNewTodoText("");
      
      startTransition(async () => {
        try {
          const newTodo = await createTodo(text);
          setTodos(prev => [...prev, newTodo]);
        } catch (error) {
          console.error('Failed to create todo:', error);
          setNewTodoText(text); // Restore text on error
        }
      });
    }
  };

  const toggleCompletion = (id: number) => () => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    
    const newCompleted = !todo.completed;
    
    // Optimistic update
    setTodos(prev => 
      prev.map(t => t.id === id ? { ...t, completed: newCompleted } : t)
    );
    
    startTransition(async () => {
      try {
        await toggleTodo(id, newCompleted);
      } catch (error) {
        console.error('Failed to toggle todo:', error);
        // Revert optimistic update on error
        setTodos(prev => 
          prev.map(t => t.id === id ? { ...t, completed: todo.completed } : t)
        );
      }
    });
  };

  const handleDeleteTodo = (id: number) => () => {
    // Optimistic update
    setTodos(prev => prev.filter(todo => todo.id !== id));
    
    startTransition(async () => {
      try {
        await deleteTodo(id);
      } catch (error) {
        console.error('Failed to delete todo:', error);
        // Revert optimistic update on error - need to fetch the todo back
        router.refresh();
      }
    });
  };

  const refreshTodos = async () => {
    startTransition(async () => {
      try {
        const updatedTodos = await fetchAllTodos();
        setTodos(updatedTodos);
      } catch (error) {
        console.error('Failed to refresh todos:', error);
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-medium text-2xl">My Todo List</div>
        <button
          onClick={refreshTodos}
          disabled={isPending}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
          title="Refresh todos from database"
        >
          <IconRefresh size={20} className={isPending ? "animate-spin" : ""} />
        </button>
      </div>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo
            key={val.id}
            {...val}
            onToggleCompletion={toggleCompletion(val.id)}
            onDelete={handleDeleteTodo(val.id)}
          />
        ))}
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          disabled={isPending || !newTodoText.trim()}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IconPlus />
          {isPending ? "Adding..." : "Add Item"}
        </button>
      </div>
    </>
  );
};
