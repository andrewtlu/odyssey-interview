"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async (text: string) => {
  return await prisma.todoItem.create({
    data: {
      text,
      completed: false,
    }
  });
};

export const completeTodo = async (id: number, completed: boolean) => {
  return await prisma.todoItem.update({
    where:{id}, 
    data: {completed},
  });
};

export const deleteTodo = async (id: number) => {
  return await prisma.todoItem.deleteMany({
    where:{id},
  });
};
