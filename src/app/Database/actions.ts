"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async () => {
  return null;
};

export const completeTodo = async () => {
  return null;
};

export const deleteTodo = async () => {
  return null;
};
