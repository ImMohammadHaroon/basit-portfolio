# Basit Ali - Portfolio Website

A professional portfolio website for Basit Ali, Mobile App Developer, built with React.js and Tailwind CSS.

## Features

✨ **Modern Design**
- Professional and clean aesthetic
- Glassmorphism effects throughout
- Custom cursor implementation
- Smooth animations with Framer Motion

🎨 **Dark/Light Mode**
- Theme toggle with localStorage persistence
- Smooth transitions between themes

📱 **Responsive Design**
- Fully responsive across all devices
- Mobile-first approach

🚀 **Key Sections**
- Home: Hero section with bio, skills, and education
- Projects: Showcase of mobile app projects
- Project Details: Blog-style detailed pages for each project
- Contact: Contact form with validation

## Technologies

- React 18
- Vite
- Tailwind CSS 3
- React Router DOM
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd basit-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Add project images (see Images section below)

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Images

The website requires the following images to be added to the `public/images/` directory:

### Developer Photo
- `developer-photo.jpg` - Professional headshot (recommended: 400x400px or larger)

### Secure Vault App
- `secure-vault-thumb.jpg` - Project thumbnail (recommended: 1200x675px)
- `secure-vault-1.jpg` - Screenshot 1
- `secure-vault-2.jpg` - Screenshot 2
- `secure-vault-3.jpg` - Screenshot 3
- `secure-vault-4.jpg` - Screenshot 4

### Bookkeeping App
- `bookkeeping-thumb.jpg` - Project thumbnail (recommended: 1200x675px)
- `bookkeeping-1.jpg` - Screenshot 1
- `bookkeeping-2.jpg` - Screenshot 2
- `bookkeeping-3.jpg` - Screenshot 3
- `bookkeeping-4.jpg` - Screenshot 4

**Note**: Until images are added, placeholder backgrounds will be shown with gradient colors.

## Project Structure

```
basit-portfolio/
├── public/
│   └── images/          # Add your images here
├── src/
│   ├── components/
│   │   ├── Layout/      # Header, Footer
│   │   ├── UI/          # Reusable UI components
│   │   └── CustomCursor.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── developer.js # Developer information
│   │   └── projects.js  # Project data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Update Developer Information
Edit `src/data/developer.js` to update personal information, skills, and education.

### Add/Edit Projects
Edit `src/data/projects.js` to add new projects or modify existing ones.

### Customize Colors
Edit `tailwind.config.js` to change the color scheme. The primary and accent colors can be customized in the `theme.extend.colors` section.

## Contact Form

The contact form includes client-side validation. To make it functional, integrate it with a backend service or email API (e.g., EmailJS, Formspree, or your own backend).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Basit Ali. All rights reserved.

## Contact

- Email: devbasitpy@gmail.com
- Phone: +92 3297802314
- Location: Bahawalpur, Pakistan
