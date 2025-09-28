// For more information on Next.js rendering, see
// https://nextjs.org/docs/app/getting-started/server-and-client-components
// Essentially, you can't use client states in server components, but you can include client
// components in a server component and pass states only accessible by server (aka the database)
// to client components
"use server";

import { TodoList } from "./Todo/TodoList";
import { fetchAllTodos } from "./Database/actions";

/**
 * Next.js's AppRouter uses the directory structure of `app/` to define routes, with `page.tsx` defining a page along a route.
 * @returns the home page at `localhost:3000/`
 */
const Home = async () => {
  const todos = await fetchAllTodos();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-xl">
        <TodoList initialTodos={todos} />
      </main>
    </div>
  );
};

export default Home;
