# Reddit Clone for Ocho

This project is a clone of Reddit, built with the aim of demonstrating the ability to create a high-quality, performant web application with a focus on simplicity, usability and accessibility. 

## Technology Stack

This application is built with Next.js version 13, leveraging its App Router mode, which enables the use of React Server Components.

One of the features is link prefetching. When a user hovers over a link, the destination page is prefetched, creating a smooth, SPA-like navigation experience. At the same time, we maintain a lightweight download footprint due to the SSR of Next.js.

The project embraces a minimalist philosophy regarding dependencies, selecting only those that are essential.

**Just an icons package and a pure CSS color system.**

Styling was implemented using CSS Modules, chosen specifically for compatibility with React Server Components. Traditional styling libraries were not used because they require client-side rendering. 
Tailwind would also be a great option, but this is a tech test and I wanted to demonstrate my ability to write CSS from scratch.

No state management libraries were used either. For the needs of this application, React's local state with useState is sufficient.

## Enhancements I Would Add with More Time:

- More tests
- Skeleton components instead of the page loader
- Normalizing functions to consume API responses
- The ability to refresh the page and keep changes of comments and votes in localStorage


## How to Use This Project

Here are the steps to get this project running on your local machine:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/dyegolara/reddit-ocho
```

2. Navigate into the project directory.

```bash
cd reddit-ocho
```

3. Install the dependencies using `pnpm`.

```bash
pnpm i
```

4. Run the development server.

```bash
pnpm dev
```

You can now open [http://localhost:3000](http://localhost:3000) in your browser to see the project live.

## Deployment

Deployment of the project was carried out on [Vercel](https://vercel.com).