# AI4ALL Armenia Website

This is a Next.js project for the AI4ALL Armenia website, designed to democratize AI education in Armenia by empowering youth (15-29) and teachers with essential AI skills.

## Features

- **Public Website**: Home, About, Programs, Impact, News & Events, Contact pages
- **Admin Panel**: Content management system for dynamic content updates
- **Database Integration**: MySQL database for storing programs, applications, and user data
- **Authentication**: JWT-based authentication system
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Animations**: Smooth animations using Framer Motion

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MySQL
- **Authentication**: JWT
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or later
- MySQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=ai4all_armenia
   JWT_SECRET=your_jwt_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Database and utility functions
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## Admin Panel

The admin panel is accessible at `/admin` and includes:
- Content management for programs, news, and events
- Application management
- User management
- Media library
- Settings

## Database Schema

The application uses MySQL with the following main tables:
- `programs`: AI programs information
- `applications`: Student applications
- `users`: Admin users
- `news`: News articles and events
- `testimonials`: Success stories

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
