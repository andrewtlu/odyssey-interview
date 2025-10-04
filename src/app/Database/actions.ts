"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  const todoItems = await prisma.todoItem.findMany({
    orderBy: { id: "asc" },
  });

  if (todoItems.length == 0) {
    await prisma.todoItem.createMany({
      data: [
        { text: "Welcome!", completed: false },
        {
          text: "← Toggle completion by clicking the checkbox",
          completed: false,
        },
        {
          text: 'Delete todos by clicking "delete" button →',
          completed: false,
        },
        {
          text: 'Add todos by clicking "Add Item" button below ↓',
          completed: false,
        },
      ],
    });
  }

  return todoItems;
};

export const createTodo = async (text: string) => {
  const validText = text.trim();
  if (!validText) {
    throw new Error("Invalid todo name.");
  }
  const newTodo = prisma.todoItem.create({
    data: {
      text: text,
      completed: false,
    },
  });
  return newTodo;
};

export const completeTodo = async (id: number) => {
  const validTodo = await prisma.todoItem.findUnique({
    where: { id: id },
  });
  if (!validTodo) throw new Error("Todo item not found on complete");

  const flippedCompleted = !validTodo.completed;

  await prisma.todoItem.updateManyAndReturn({
    where: { id: id },
    data: {
      completed: flippedCompleted,
    },
  });
};

export const deleteTodo = async (id: number) => {
  const validTodo = await prisma.todoItem.findUnique({ where: { id: id } });
  if (!validTodo) throw new Error("Todo item not found on delete");

  await prisma.todoItem.delete({
    where: { id: id },
  });
};
