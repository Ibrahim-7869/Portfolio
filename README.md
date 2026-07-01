# Muhammad Ibrahim - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark theme with orange accent color
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 💬 Contact form with Supabase integration
- 🎯 Smooth scrolling navigation
- ✨ Animated components

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Supabase (contact messages)
- **Styling**: Tailwind CSS, PostCSS

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── context/        # React context
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## License

MIT
