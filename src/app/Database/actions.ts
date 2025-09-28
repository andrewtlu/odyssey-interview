"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  // Optional: order so new & old are predictable
  return prisma.todoItem.findMany({ orderBy: { id: "asc" } });
};

export const createTodo = async (text: string) => {
  const clean = text?.trim();
  if (!clean) return null; // ignore empty
  return prisma.todoItem.create({
    data: { text: clean, completed: false },
  });
};

export const completeTodo = async (id: number, completed: boolean) => {
  return prisma.todoItem.update({
    where: { id },
    data: { completed },
  });
};

export const deleteTodo = async (id: number) => {
  await prisma.todoItem.delete({ where: { id } });
  // return something lightweight so callers know which one was removed
  return { id };
};