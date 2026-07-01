# Muhammad Ibrahim - Portfolio

> A modern, responsive portfolio website showcasing backend development expertise, DevOps skills, and cloud infrastructure projects.

**Live Demo:** [Deploy on Vercel/Supabase]

## ✨ Features

- 🎨 **Modern Design** - Dark theme with orange accent, carefully crafted UI
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **High Performance** - Built with Vite for lightning-fast load times
- 💬 **Contact Form** - Functional contact form with Supabase database integration
- 🎯 **Smooth Navigation** - Seamless section scrolling and navigation
- 🌓 **Theme Toggle** - Light/Dark mode support
- ✨ **Animated Components** - Smooth animations and transitions
- 📊 **Portfolio Sections** - About, Skills, Experience, Projects, Education, Contact

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS + PostCSS
- Lucide React Icons
- Vite (build tool & dev server)

**Backend & Database:**
- Supabase (PostgreSQL + Auth)
- Row-Level Security (RLS) policies
- Real-time database

**Build & Development:**
- Vite
- ESLint
- TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ibrahim-7869/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Get these from your [Supabase Dashboard](https://supabase.com/dashboard) → Settings → API

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components (Hero, About, Skills, etc.)
│   ├── context/             # React Context for theme management
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles & theme variables
│   └── vite-env.d.ts        # Vite environment types
├── supabase/
│   └── migrations/          # Database migrations & RLS policies
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

## 📝 Database Setup

The portfolio uses Supabase with the following table structure:

```sql
contact_messages {
  id: uuid (primary key)
  name: text
  email: text
  subject: text
  message: text
  created_at: timestamp
  read: boolean
}
```

**Row Level Security (RLS) Policies:**
- ✅ Anonymous users can INSERT (submit contact form)
- ✅ Authenticated users can SELECT/UPDATE/DELETE (admin access)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Add environment variables:
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```
6. Click Deploy!

### Deploy to Supabase Hosting

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to "Deployments"
3. Follow the deployment wizard
4. Add your environment variables

## 📧 Contact Form

Messages submitted through the contact form are stored in the Supabase `contact_messages` table.

**To get email notifications:**
- Set up Supabase webhooks to trigger email service (Resend, SendGrid, etc.)
- Or create a Supabase Edge Function to send emails automatically

## 🔒 Security

- ✅ Environment variables protected in `.env.local` (not committed to git)
- ✅ Supabase RLS policies enforce access control
- ✅ Anon key has limited permissions (INSERT only)
- ✅ Service Role key never exposed in frontend code

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and use it as a template!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Muhammad Ibrahim**
- Portfolio: [Your Live URL]
- Email: Majidibrahim113@gmail.com
- Phone: +92 325 6397906
- Location: Bahawalpur, Pakistan
- GitHub: [@Ibrahim-7869](https://github.com/Ibrahim-7869)
- LinkedIn: [Profile Link]

## ⭐ Show your support

Give a ⭐️ if you found this helpful or inspiring!
