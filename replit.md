# ÉDoce Confectionery Website

## Overview

This project is a full-stack TypeScript application for "ÉDoce", an artisanal confectionery business. The application features a modern React frontend with Tailwind CSS for styling and an Express backend. It uses Drizzle ORM for database interactions and follows a clean separation between client and server code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with the following components:

### Frontend

- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with a custom theme
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Animation**: Framer Motion for page transitions and UI animations
- **State Management**: React Query for API data fetching and caching
- **Form Handling**: React Hook Form with Zod validation

### Backend

- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM (PostgreSQL compatible)
- **API Structure**: RESTful API with Express routes
- **Authentication**: Set up for basic user authentication (not fully implemented)
- **Static Assets**: Vite middleware for development and static file serving

### Database

- **Schema**: Simple user schema defined with Drizzle and Zod for validation
- **Migrations**: Drizzle Kit for schema migrations
- **Storage Interface**: Abstracted storage interface with current MemStorage implementation

## Key Components

### Frontend Components

1. **Layout Components**:
   - `Header` - Navigation bar with links to sections
   - `Footer` - Site footer with contact information
   - `WhatsAppButton` - Floating action button for contacting via WhatsApp

2. **Page Components**:
   - `Home` - Main landing page with all sections
   - `NotFound` - 404 error page

3. **Section Components**:
   - `Hero` - Main banner with call-to-action
   - `About` - Company information
   - `Products` - Product catalog with pricing
   - `SpecialDates` - Special occasion offerings
   - `Testimonials` - Customer reviews
   - `Contact` - Contact information and ordering instructions

4. **UI Components**:
   - Extensive collection of shadcn/ui components
   - Custom `product-card` component
   - Custom `tabs-edoce` component for product tabs

### Backend Components

1. **Server Setup**:
   - Express configuration in `server/index.ts`
   - Route registration in `server/routes.ts`

2. **Data Layer**:
   - Database schema in `shared/schema.ts`
   - Storage interface in `server/storage.ts` with a `MemStorage` implementation

3. **Development Tools**:
   - Vite integration for hot reloading
   - Custom logger and error handling

## Data Flow

1. **Frontend to Backend**:
   - API requests using the React Query library
   - Custom `apiRequest` function in `queryClient.ts` for handling API calls
   - RESTful API pattern with JSON data exchange

2. **Backend to Database**:
   - Abstract storage interface for database operations
   - Currently using in-memory storage for development
   - Ready for integration with a PostgreSQL database

3. **Authentication Flow**:
   - Basic user schema with username/password
   - Authentication routes planned but not fully implemented

## External Dependencies

### Frontend Dependencies

- React and React DOM
- Wouter for routing
- Tailwind CSS for styling
- shadcn/ui and Radix UI for components
- Framer Motion for animations
- React Query for data fetching
- React Hook Form for forms
- Zod for validation

### Backend Dependencies

- Express.js for the server
- Drizzle ORM for database operations
- TypeScript for type safety
- Vite for development server

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development Mode**: `npm run dev` runs both server and client with hot reloading
- **Production Build**: `npm run build` builds both client and server code
- **Production Start**: `npm run start` runs the built production code
- **Database Migration**: `npm run db:push` applies schema changes to the database

The deployment configuration in `.replit` includes:
- Modules for Node.js 20, web, and PostgreSQL 16
- Autoscale deployment target
- Proper port configuration (port 5000 mapped to external port 80)
- Build and run commands for production

### Database Connection

The application is set up to use PostgreSQL via Drizzle ORM. The database URL should be provided as an environment variable `DATABASE_URL`. Currently, the application can run with an in-memory database implementation, but is ready to connect to a PostgreSQL database once configured.

## Development Workflow

1. **Setup**:
   - The application will use Replit's PostgreSQL database
   - Environment variables for `DATABASE_URL` need to be set

2. **Development**:
   - Run `npm run dev` to start the development server
   - Client code is in `client/src/`
   - Server code is in `server/`
   - Shared code is in `shared/`

3. **Database Changes**:
   - Update schema in `shared/schema.ts`
   - Run `npm run db:push` to apply changes

4. **Deployment**:
   - Commits to the main branch will trigger a deployment
   - The build process compiles both client and server code