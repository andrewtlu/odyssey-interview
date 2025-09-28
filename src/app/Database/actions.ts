"use server";

import prisma from "./client";

export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async (text: string) => {
  try {
    const newTodo = await prisma.todoItem.create({
      data: {
        text: text.trim(),
        completed: false,
      },
    });
    return newTodo;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw new Error('Failed to create todo');
  }
};

export const toggleTodo = async (id: number, completed: boolean) => {
  try {
    const updatedTodo = await prisma.todoItem.update({
      where: { id },
      data: { completed },
    });
    return updatedTodo;
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw new Error('Failed to toggle todo');
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await prisma.todoItem.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw new Error('Failed to delete todo');
  }
};
