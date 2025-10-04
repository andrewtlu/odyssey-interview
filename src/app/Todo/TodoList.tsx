"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState, useEffect } from "react";
import {
  fetchAllTodos,
  createTodo,
  completeTodo as serverCompleteTodo,
  deleteTodo as serverDeleteTodo,
} from "../Database/actions";

export const TodoList = ({ initialTodos }: { initialTodos?: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos ?? []);

  // still learning useEffect
  useEffect(() => {
    if (!initialTodos) {
      (async () => {
        const freshTodos = await fetchAllTodos();
        setTodos(freshTodos);
      })(); // Immediately Invoked Function Expression, make effect callback sync but inside async
    }
  }, [initialTodos]);

  const [text, setNewTodoText] = useState("");

  // function addTodo() {
  //   const lastId = todos[todos.length - 1].id;
  //   if (newTodoText.trim().length === 0) return;
  //   setTodos([
  //     ...todos,
  //     {
  //       id: lastId + 1,
  //       text: newTodoText,
  //       completed: false,
  //     },
  //   ]);
  // }

  async function serverAddTodo() {
    if (text.trim().length === 0) return;
    const newTodo = await createTodo(text);
    setTodos([...todos, newTodo]);
  }

  function flipCompletion(id: number) {
    return () => {
      serverCompleteTodo(id);
      setTodos((prevTodos) =>
        prevTodos.map((item) => {
          if (item.id === id) {
            const toggled = { ...item, completed: !item.completed };
            return toggled;
          } else {
            return item;
          }
        }),
      );
    };
  }

  function deleteTodo(id: number) {
    return () => {
      serverDeleteTodo(id);
      setTodos((prevTodos) => {
        const newTodos: typeof prevTodos = [];
        for (const todo of prevTodos) {
          if (todo.id !== id) newTodos.push(todo);
        }
        return newTodos;
      });
    };
  }

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col">
        {todos.map((val) => (
          <Todo
            key={val.id}
            {...val}
            onToggle={flipCompletion(val.id)}
            onDelete={deleteTodo(val.id)}
          />
        ))}
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={text}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
          onClick={serverAddTodo}
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
