---

# FamilyChecklist

FamilyChecklist is a web-based application designed to help parents and kids stay organized and track progress together. Built with robust AWS infrastructure and a modern web framework, this application offers two distinct interfaces tailored for parents and kids, ensuring a user-friendly experience for both.

## Features

- **Two Separate Interfaces**: 
  - **Parent Interface**: Manage tasks, monitor progress, and set goals for your kids.
  - **Kid Interface**: View assigned tasks, check off completed activities, and track achievements.
  
- **Progress Tracking**: Keep a record of completed tasks and see how your family progresses over time.

- **Secure Authentication**: Implemented with best practices to ensure that your data remains private and secure.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Testing

```bash
npm test
```

## Linting (vs code)

this needs to go in vscode user settings along with eslint extention
```"eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],```

## Linting (terminal)
```npm run lint```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
