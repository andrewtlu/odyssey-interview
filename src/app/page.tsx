import {
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandTailwind,
  IconPlus,
} from "@tabler/icons-react";
import { Todo, type TodoItem } from "./Todo";

/**
 * Next.js's AppRouter uses the directory structure of `app/` to define routes, with `page.tsx` defining a page along a route.
 * @returns the home page at `localhost:3000/`
 */
export default function Home() {
  const items: TodoItem[] = [
    {
      text: "item 1",
      completed: false
    },
    {
      text: "item 2",
      completed: false
    },
    {
      text: "item 3",
      completed: true
    }
  ]

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-xl">
        <div className="font-medium text-2xl">My Todo List</div>
        <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md">
          {
            items.map((val) => 
              <Todo {...val} />
            )
          }
        </ul>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer">
            <IconPlus />
            Add Item
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandNextjs />
          Next.js Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tailwindcss.com/docs/styling-with-utility-classes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTailwind />
          Tailwind Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.prisma.io/docs/orm/prisma-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandPrisma />
          Prisma Docs
        </a>
      </footer>
    </div>
  );
}
