# Project Odyssey Interview

Hi! In this assessment, you're going to be playing the role of a software engineer working on an early iteration of a [Next.js](https://nextjs.org/docs) todo app. **This assessment is due 9/27/2025 @ 11:59 PM but will be reviewed on a rolling basis!**

## Background

You may be thinking, "this is a stupid todo app!"

I agree!

But the purpose of this assessment is to test skills that we'll be working with on Project Odyssey. Whether you have a ton of Next.js experience or none at all, we're looking to see your skill as a software engineer, your previous knowledge, and your ability to learn new things on the go.

Before you move on, some general reminders of things we're looking for:

- **Use git properly!** We don't want to see one commit that solves all the tasks at once! When you feel you have made good progress, stage your changes and write a commit message _in present tense that describes what is in the commit_. This will also allow you to revert changes easily.
- **Ensure your code is formatted!** If you do one thing, make sure to run `npm run format` before staging code. Configuring your editor to format code using `prettier.config.mjs` will make your life easier!
- **Use the resources you have (including me)!** You can reach me at (four oh four) seven eight six - six four two seven or andrew.lu (at) emory.edu if you need help, and I've provided some documentation in the tasks for your reference. Additionally, you have Google and large language models at your disposal. We don't want you to just throw the _entire_ task at an LLM, but you are free to use any resources at your disposal (not including other forks of this repo/pull requests to this repo) to help you solve these tasks.
- **Use the provided libraries, no more and no less!** You should be able to solve all the tasks without any new dependencies. If you need to use icons, use [`@tabler/icons-react`](https://tabler.io/icons). Don't write any vanilla CSS code _unless absolutely necessary_; instead, use [`tailwindcss`](https://tailwindcss.com/).

Remember, we want to see your thought process when tackling the code and will look at your commit history. If you move on to the interview, we will be walking through your solution with you.

## Setup

Firstly, fork this repository to your personal GitHub, and clone your forked copy locally.

Secondly, open the cloned repository in an editor & terminal of your choice, and run `npm run setup` in the terminal. If you are using VSCode (which we recommend), the following are some extensions that will help you:

- dbaeumer.vscode-eslint
- christian-kohler.npm-intellisense
- esbenp.prettier-vscode
- Prisma.prisma
- bradlc.vscode-tailwindcss

Finally, to view your current code in a dev server, run `npm run dev` and go to [`localhost:3000/`](http://localhost:3000/) to view your current code in website form. Try to only have this command running in one terminal, or you may have some weird behavior occur.

## Tasks

### Task 1 -- Warmup (Fix the list!)

If you run the dev server, you'll see in the bottom left corner that the Next.js web tools is complaining about keys! (You'll also see this with the recommended eslint extension and when running `npm run lint`). Add a key prop to each `Todo` item so that Next.js knows when to rerender elements.

Additionally, it looks like the previous code author made a mistake in the CSS - ensure that the `Todo` items are displayed as a top-to bottom list, instead of in a row.

I've added some handy comments of the stuff that needs to change, just to get you warmed up.

Helpful resources: [(react key warnings)](https://react.dev/link/warning-keys) [(tailwind flex)](https://tailwindcss.com/docs/flex-direction)

### Task 2 -- Todo styling

Currently, the `Todo` component is very simple and frankly not very nice looking. Update the `Todo` component to be a distinctly visible in the list (at minimum, a different background color compared to the list's background) and indicate whether a task has been completed or not (at minimum, shows a checkbox that shows completed status and is slightly transparent if completed). If you end up not using the `id` property, suppress the eslint warning.

Helpful resources: [(tailwind background colors)](https://tailwindcss.com/docs/background-color) [(tailwind opacity)](https://tailwindcss.com/docs/opacity) [(suggested checkbox html element)](https://react.dev/reference/react-dom/components/input)

## Submission

## Misc
