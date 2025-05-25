# Music Courses Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) featuring Aceternity UI components for a modern music courses platform.

## Setup Steps

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd musicnextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install @acerternity/ui framer-motion tailwindcss
   # or
   yarn add @acerternity/ui framer-motion tailwindcss
   ```

4. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure
```
musicnextjs/
├── app/
│   ├── components/
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── styles/
    └── globals.css
```

## Features

- 🎵 Music course catalog
- 🎨 Interactive UI components from Aceternity UI
- 🚀 Fast page loads with Next.js
- 📱 Responsive design
- ⚡ Real-time updates

## Technologies Used

- Next.js
- Aceternity UI Components
- TypeScript
- Tailwind CSS

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses:
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for font optimization
- [Aceternity UI](https://ui.aceternity.com/) for modern UI components
- [Tailwind CSS](https://tailwindcss.com) for styling

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Aceternity UI Documentation](https://ui.aceternity.com/components)

## Deploy on Vercel

Deploy your Next.js app using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Requirements

- Node.js 16.x or later
- npm or yarn package manager
- Git