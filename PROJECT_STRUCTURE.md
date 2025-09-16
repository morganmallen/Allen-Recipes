# Project Structure

```
allen-recipes/
├── package.json                 # Root package.json with workspace config
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── README.md                   # Project documentation
├── PROJECT_STRUCTURE.md        # This file
│
├── apps/
│   ├── web/                    # React frontend application
│   │   ├── package.json        # Frontend dependencies
│   │   ├── vite.config.ts      # Vite configuration
│   │   ├── tailwind.config.js  # Tailwind CSS configuration
│   │   ├── postcss.config.js   # PostCSS configuration
│   │   ├── tsconfig.json       # TypeScript config
│   │   ├── tsconfig.node.json  # Node TypeScript config
│   │   ├── .eslintrc.cjs       # ESLint configuration
│   │   ├── index.html          # HTML entry point
│   │   └── src/                # Source code
│   │       ├── components/     # React components
│   │       ├── pages/          # Page components
│   │       ├── hooks/          # Custom React hooks
│   │       ├── services/       # API services
│   │       └── types/          # TypeScript types
│   │
│   └── api/                    # Hono backend API
│       ├── package.json        # Backend dependencies
│       ├── tsconfig.json       # TypeScript configuration
│       ├── .eslintrc.cjs       # ESLint configuration
│       └── src/                # Source code
│           ├── routes/         # API route handlers
│           ├── middleware/     # Custom middleware
│           ├── services/       # Business logic services
│           ├── types/          # TypeScript types
│           └── utils/          # Utility functions
│
└── packages/
    └── shared/                 # Shared types and utilities
        ├── package.json        # Shared package dependencies
        ├── tsconfig.json       # TypeScript configuration
        ├── .eslintrc.cjs       # ESLint configuration
        └── src/                # Source code
            ├── types/          # Shared TypeScript types
            └── utils/          # Shared utility functions
```

## Key Features

- **Monorepo**: Uses pnpm workspaces for dependency management
- **TypeScript**: Full TypeScript support across all packages
- **Code Quality**: ESLint and Prettier configured
- **Styling**: Tailwind CSS for the frontend
- **Development**: Hot reload for both frontend and backend
- **Shared Code**: Common types and utilities in shared package

