"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async () => {
  // TODO: finish me!
};

export const completeTodo = async () => {
  // TODO: finish me!
};

export const deleteTodo = async () => {
  // TODO: finish me!
};
