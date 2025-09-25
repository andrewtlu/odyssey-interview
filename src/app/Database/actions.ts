"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return prisma.todoItem.findMany({ orderBy: { id: "asc" } });
};

export const createTodo = async (text: string) => {
  return prisma.todoItem.create({
    data: { text, completed: false },
  });
};

export const completeTodo = async (id: number, completed: boolean) => {
  return prisma.todoItem.update({
    where: { id },
    data: { completed },
  });
};

export const deleteTodo = async (id: number) => {
  return prisma.todoItem.delete({
    where: { id },
  });
};
