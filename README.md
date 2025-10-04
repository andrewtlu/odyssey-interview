# Project Odyssey Interview

Hi! In this assessment, you're going to be playing the role of a software engineer working on an early iteration of a [Next.js](https://nextjs.org/docs) todo app. **This assessment is due 9/27/2025 @ 11:59 PM but will be reviewed on a rolling basis!**

## Context

You may be thinking, "this is probably a stupid todo app!"

It is a stupid todo app!

But the purpose of this assessment is to test skills that we'll be working with on Project Odyssey. Whether you have a ton of Next.js experience or none at all, we're looking to see your skill as a software engineer, your previous knowledge, and your ability to learn new things on the go.

Before you move on, some general technical requirements:

- **Use git properly!** We don't want to see one commit that solves all the tasks at once! When you feel you have made good progress, stage your changes and write a commit message _in present tense that describes what is in the commit_. This will also allow you to revert changes easily.
- **Ensure your code is formatted!** If you do one thing, make sure to run `npm run format` before staging code. Configuring your editor to format code using `prettier.config.mjs` will make your life easier!
- **Use the resources you have (including me)!** You can reach me at (four oh four) seven eight six - six four two seven or andrew.lu (at) emory.edu if you need help, and I've provided some documentation in the tasks for your reference. Additionally, you have Google and large language models at your disposal. We don't want you to just throw the _entire_ task at an LLM, but you are free to use any resources at your disposal (not including other forks of this repo/pull requests to this repo) to help you solve these tasks.
- **Use the provided libraries, no more and no less!** You should be able to solve all the tasks without any new dependencies. If you need to use icons, use [`@tabler/icons-react`](https://tabler.io/icons). Don't write any vanilla CSS code _unless absolutely necessary_; instead, use [`tailwindcss`](https://tailwindcss.com/).

Remember, we want to see your thought process when tackling the code and will look at your commit history. If you move on to the interview, we will be walking through your solution with you.

Aside: **You don't have to complete this entire assessment to be considered!** This is not normally how OAs go, but we recognize that everyone has different levels of experience. Not completing the entire assessment is ok, as long as the assessment is submitted before the deadline. We won't promise it won't affect your application, but we will promise to review your application holistically.

## Setup

Firstly, fork this repository to your personal GitHub, and clone your forked copy locally.

Secondly, open the cloned repository in an editor of your choice. Make a copy of the `.env-example` file and name it `.env`. As an aside, if you are using VSCode (which we recommend), the following are some extensions that will help you during development:

- dbaeumer.vscode-eslint
- christian-kohler.npm-intellisense
- esbenp.prettier-vscode
- Prisma.prisma
- bradlc.vscode-tailwindcss

Thirdly, open the project's base directory in the terminal of your choice and run `npm run setup`. This installs the necessary dependencies and initializes a database for us.

Lastly, to view your current code in a dev server, run `npm run dev` and go to [`localhost:3000/`](http://localhost:3000/) to view your current code in website form. Try to only have this command running in one terminal, or you may have some weird behavior occur.

## Tasks

### Task 1 -- Warmup

If you run the dev server, you'll see in the bottom left corner that the Next.js web tools is complaining about keys! (You'll also see this with the recommended eslint extension and when running `npm run lint`). Add a key prop to each `Todo` item so that Next.js knows when to rerender elements.

Additionally, it looks like the previous code author made a mistake in the CSS - ensure that the `Todo` items are displayed as a top-to bottom list, instead of in a row.

There are some handy comments of the stuff that needs to change just to get you warmed up. You can search for `(task 1)` to locate these files quickly, or find them in the `src/app/Todo/` folder. (P.S. it is courteous to remove TODO comments once they're done :) )

Helpful resources: [(react key warnings)](https://react.dev/link/warning-keys) [(tailwind flex)](https://tailwindcss.com/docs/flex-direction)

### Task 2 -- Todo Styling

Currently, the `Todo` component is very simple and frankly not very nice looking. Update the `Todo` component to be a distinctly visible in the list (at minimum, a different background color compared to the list's background) and indicate whether a task has been completed or not (at minimum, shows a checkbox that shows completed status and is slightly transparent if completed). If you end up not using the `id` property, suppress the eslint warning.

1. change bg color
2. add check box + toggle
3. transparent toggled items

Helpful resources: [(tailwind background colors)](https://tailwindcss.com/docs/background-color) [(tailwind opacity)](https://tailwindcss.com/docs/opacity) [(suggested checkbox html element)](https://react.dev/reference/react-dom/components/input)

### Task 3 -- Todo State + New Todos

Now that we have a properly styled `Todo` component, let's add some proper functionality to the app.

Refactor the `todos` variable to be a React state, so that when `todos` is updated the list will rerender on the website.

Once you convert `todos` to a state, add functionality to the `Add Item` button that adds a new item to `todos` when it is clicked, using the user's input text; if the button is pressed without any text, do nothing.

Helpful resources: [(react states)](https://react.dev/reference/react/useState) [(react array/object states)](https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state)

### Task 4 -- Complete + Delete Todos

Now that we can add todos, let's finish up the component by implementing functionality to complete todos and delete todos.

This will be a little complicated, since the completion/deletion functionality should be set in the `Todo` component, even though the state is stored in the `TodoList` component. You can go about it in a couple of ways (for your reference, 1 & 2 are referred to as prop drilling):

1. Write two generic functions in `TodoList` that take an `id` parameter and returns a function that will do the proper completion/deletion state update on `todos`, pass those functions into `Todo` as another prop, and call the functions in `Todo` (the function defined in the `TodoList` component will have access to variables defined in `TodoList`!)
2. Directly pass the necessary state updating function(s) to `Todo`, and write the completion/deletion logic in `Todo`
3. (not recommended here but most "scalable" and "best practice") Extract the `todos` state into a context and update any usages of `todos` to use the context's state. Then, use the context within `Todo` to update `todos`

Add a deletion button to all `Todo` elements, and make it so that clicking on the `Todo` item toggles task completion and clicking on the `Todo`'s delete button deletes the `Todo` entirely, regardless of if it was completed or not.

Helpful resources: [(react contexts NOT RECOMMENDED)](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context) [(nextjs contexts + server/client side rendering NOT RECOMMENDED)](https://nextjs.org/docs/app/getting-started/server-and-client-components#context-providers) [(nesting click events & stopping event propogation)](https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click)

### Task 5 -- Database Integration

Congrats on getting this far! Our app is looking great, and it functions well -- as long as we keep our tab open. However, you'll notice that if we refresh the page or switch browsers, our todo list gets reset!

To fix this, we're going to introduce a little bit of server logic. (In case you're curious, `localStorage` wouldn't work, since `localStorage` isn't shared across browsers.)

Our database was handily setup in the `setup` script defined in our `package.json` and should have been run earlier. There is an `action.ts` file in `src/app/Database` that has some server actions that need to be implemented and then called in our components.

Implement each of the server actions provided, and refactor all the code written so far to call the server actions for creating tasks, updating tasks, and deleting tasks, trying to fetch data in server components where possible and updating relevant states when necessary.

As a bonus, implement a refresh mechanism that synchronizes any relevant frontend state with the database.

Once you've finished this, you are done! Go on to [Submissions](#submission) for instructions on next steps.

Helpful resources: [(nextjs server actions)](https://nextjs.org/docs/14/app/building-your-application/data-fetching/server-actions-and-mutations) [(prisma crud operations)](https://www.prisma.io/docs/orm/prisma-client/queries/crud)

## Submission

To submit this portion of the interview, click on the `Contribute` button in your GitHub repository home page and open a pull request to this repository's main branch. This should notify us and we will review your application shortly!

## Final Remarks

Best of luck! Remember to reach out to Andrew if you have any questions or concerns.
