# Portfolio Website

A neo-brutalist AI-focused portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with persistent localStorage
- **Interactive Animations**: Smooth scroll-triggered animations with Framer Motion
- **Chat Widget**: AI-powered conversation with Gemini API integration
- **Contact Form**: Server-side email handling with React Email
- **Modern Stack**: Next.js 13+, TypeScript, Tailwind CSS

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: React Icons, React Vertical Timeline
- **AI**: Gemini API
- **Styling**: CSS Variables, Custom Grid Background
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_EMAIL_SERVICE=your_email_config
```

## Project Structure

- `/app` - Next.js app router and pages
- `/components` - React components (header, intro, projects, skills, contact, etc.)
- `/lib` - Utilities, types, and data
- `/context` - React context (theme, active section)
- `/public` - Static assets
- `/email` - Email templates

## License

Open source - feel free to use as inspiration for your own portfolio.
