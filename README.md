# Allen Recipes

A modern recipe management application built with React, Vite, Hono, and MongoDB.

## Project Structure

This is a monorepo containing:

- `apps/web` - React frontend application built with Vite + Tailwind CSS
- `apps/api` - Hono backend API server with PostgreSQL
- `packages/shared` - Shared types and utilities

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- PostgreSQL (local or cloud)

### Installation

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

This will start both the frontend (port 3000) and backend (port 3001) in development mode.

### Individual Commands

```bash
# Frontend only
cd apps/web && pnpm dev

# Backend only  
cd apps/api && pnpm dev

# Build all packages
pnpm build
```

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
- **Backend**: Hono, TypeScript, PostgreSQL
- **Package Manager**: pnpm
- **Monorepo**: pnpm workspaces

## Development

This project is set up for practice and learning. The structure includes:

- Monorepo with pnpm workspaces
- TypeScript configuration across all packages
- ESLint and Prettier for code quality
- Tailwind CSS for styling
- Shared types and utilities package
- Separate frontend and backend applications
