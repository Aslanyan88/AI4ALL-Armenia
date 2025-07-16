<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AI4ALL Armenia Website - Copilot Instructions

## Project Context
This is a Next.js project for AI4ALL Armenia, a website designed to democratize AI education in Armenia by empowering youth (15-29) and teachers with essential AI skills.

## Technical Stack
- **Frontend**: Next.js 15 with TypeScript and App Router
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for smooth interactions
- **Database**: MySQL with custom schema
- **Authentication**: JWT-based auth system
- **Icons**: Lucide React

## Code Style Guidelines
- Use TypeScript for all components and functions
- Follow Next.js App Router conventions
- Use Tailwind CSS classes for styling
- Implement responsive design (mobile-first)
- Use Framer Motion for animations
- Follow the established color palette (primary blue/teal/green, accent orange/yellow)

## Component Structure
- Create reusable components in `src/components/`
- Use proper TypeScript interfaces for props
- Implement proper error handling
- Use React hooks appropriately
- Follow accessibility best practices

## Database Integration
- Use MySQL2 for database connections
- Implement proper error handling for database operations
- Use environment variables for sensitive data
- Create proper migrations and seed data

## Animation Guidelines
- Use Framer Motion for page transitions and interactions
- Keep animations subtle and performant
- Use the predefined animation classes in globals.css
- Implement scroll-triggered animations where appropriate

## Security Considerations
- Implement proper input validation
- Use bcrypt for password hashing
- Implement JWT authentication properly
- Sanitize user inputs
- Use HTTPS in production

## Performance
- Optimize images using Next.js Image component
- Implement lazy loading where appropriate
- Use React.memo for expensive components
- Implement proper caching strategies
