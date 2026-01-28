# Mahalakshmi's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite, featuring smooth animations, dark/light mode, and interactive components.

## 🚀 Features

### Core Features
- Responsive design that works on all devices
- Dark/Light mode toggle with persistent theme preference
- Smooth scrolling and animations
- Custom typewriter effect component
- Interactive project showcase
- Contact form with EmailJS integration
- Social media integration
- Professional experience timeline
- Skills showcase with categorized groups

### Sections
1. **Navbar**
   - Dynamic typewriter effect with brand name
   - Responsive navigation menu
   - Theme toggle button
   - Social media links

2. **Hero Section**
   - Animated introduction
   - Typewriter effect for role description
   - Call-to-action buttons
   - Animated illustration

3. **About Section**
   - Professional summary
   - Animated tech stack icons
   - Skills showcase

4. **Skills Section**
   - Technical skills showcase
   - Categorized skill groups

5. **Experience Section**
   - Professional work experience timeline
   - Company details and roles
   - Technology stacks used

6. **Projects Section**
   - Project cards with images
   - Technology stack indicators
   - Live demo and GitHub links
   - Project descriptions and dates

7. **Contact Section**
   - EmailJS integration for form submission
   - Social media links
   - Professional profile picture
   - Contact information


## 🎨 Technologies Used

### Frontend
- React 19
- TypeScript
- Vite (build tool)
- Lucide React (icons)
- EmailJS (contact form)

### Styling
- Tailwind CSS
- Custom CSS
- Google Fonts (Inter, Dancing Script)

### Development Tools
- Vite
- TypeScript
- npm
- Git
- Vercel (deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher) or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm install` - Installs the necessary dependencies
- `npm run dev` - Runs the app in development mode (Vite dev server)
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## 🎨 Customization

### Theme Colors
The website uses Tailwind CSS with custom theme configuration. You can customize the colors using Tailwind's dark mode classes and CSS variables.

### Content
- Update project information in `src/components/Projects.tsx`
- Modify personal information in `src/constants.tsx` and respective component files
- Replace images in the `public/assets/images` directory
- Update experience data in `src/constants.tsx`

## 📦 Deployment
The website is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 📝 License
This project is open source and available under the MIT License.

## 👥 Contact
- Email: sanjumahalakshmi12@gmail.com
- LinkedIn: [Mahalakshmi Mahadevan](https://www.linkedin.com/in/mahalakshmimahadevan/)
- GitHub: [MahalakshmiPFW](https://github.com/MahalakshmiPFW)

