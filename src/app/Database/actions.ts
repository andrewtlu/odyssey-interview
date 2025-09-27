"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async (t: string) => {
  return await prisma.todoItem.create({
    data: {
      text: t,
      completed: false,
    },
  });
};

export const completeTodo = async (id: number) => {
  return await prisma.todoItem.update({
    where: { id },
    data: { completed: true },
  });
};

export const deleteTodo = async (id: number) => {
  return await prisma.todoItem.delete({
    where: {
      id: id,
    },
  });
};
