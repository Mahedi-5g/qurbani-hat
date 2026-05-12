# 🐄 QurbaniHat

QurbaniHat is a modern and responsive livestock booking platform built with Next.js. Users can browse animals, view detailed information, book their favorite animals, and manage bookings through a clean and user-friendly interface.

---

# 🌐 Live Website

🔗 https://qurbani-hat-f25h.vercel.app/

---

# ✨ Features

- 🔐 Authentication System
  - Email & Password Sign Up / Sign In
  - Google Authentication

- 🐐 Animal Listing
  - View all available animals
  - Responsive animal cards
  - Price sorting functionality

- 📄 Animal Details Page
  - Full animal information
  - Beautiful responsive layout
  - Loading animation
  - Error animation for invalid routes

- 🛒 Booking System
  - Booking form with validation
  - Success toast notification
  - Save bookings in localStorage
  - Cart page to view booked animals

- 👤 User Features
  - Profile avatar
  - Sign out functionality

- 📱 Fully Responsive Design
  - Mobile hamburger menu
  - Tablet optimized layout
  - Desktop navigation

- 🎨 Modern UI
  - HeroUI components
  - Tailwind CSS styling
  - Smooth hover animations
  - Clean responsive footer

---

# 🛠️ Technologies Used

## Frontend
- Next.js
- React.js
- Tailwind CSS
- HeroUI
- Lucide React
- React Hot Toast
- Lottie React

## Authentication
- Better Auth

## Deployment
- Vercel / Render

---

# 📂 Folder Structure

```bash
src/
│
├── app/
│   ├── allAnimals/
│   ├── api/
│   │   └── auth/
│   ├── cart/
│   ├── profilePage/
│   ├── signIn/
│   ├── signUp/
│   ├── assets/
│   │   └── lottie/
│   ├── components/
│   ├── lib/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── error.js
│   ├── not-found.js
│   └── manifest.json
│
├── public/
│
├── .env
├── package.json
└── README.md