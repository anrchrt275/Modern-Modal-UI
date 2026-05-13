# Modern Modal UI

A sleek, animated modal system built with **React**, **TailwindCSS**, and **Motion**. It showcases polished UI concepts, accessibility, and smooth transitions for production‑ready web applications.

---

## ✨ Features

- **Two pre‑built modal variants** – Form modal and informational modal.
- **Smooth entry/exit animations** powered by `motion` (spring‑based, 0.3s).
- **Keyboard accessibility** – Close with `Esc` and focus trapping.
- **Responsive design** – Works on mobile, tablet, and desktop.
- **Dark‑mode friendly** – Utilises Tailwind’s color palette.
- **Customizable content** – Pass any React node as children.
- **Built‑in icons** from `lucide-react` (Mail, Shield, X).
- **Themed backdrop** with blur and opacity.
- **Automatic body scroll lock** when a modal is open.

---

## 🛠️ Core Functions & Components

### `App`
- Manages modal state via `useState`.
- Renders two buttons to trigger the **Form** and **Info** modals.
- Demonstrates usage of the `Modal` component with custom titles, descriptions, and child JSX.

### `Modal`
- Props: `isOpen`, `onClose`, `title`, `description?`, `children`.
- Handles **escape key** listener and **body overflow** toggling.
- Uses `AnimatePresence` & `motion` for backdrop and dialog animations.
- Provides a close button with accessible `sr-only` label.
- Layout includes a header (title/description) and a content slot.

### Form Modal (example usage)
- Contains a simple contact form with **Name** and **Email** fields.
- Demonstrates focus styles, icons inside inputs, and a submit button.
- On submit, the modal closes (placeholder for real submission logic).

### Info Modal (example usage)
- Showcases a **security upgrade** message with an icon and descriptive text.
- Includes **Dismiss** and **Understood** actions.

---

## 🚀 Tech Stack

- **React 19** – Component‑based UI library.
- **Vite** – Fast dev server and bundler.
- **TailwindCSS 4** – Utility‑first styling.
- **Motion** – Declarative animation library.
- **Lucide‑React** – Icon set.
- **Express & Dotenv** – Optional backend server for API keys.

---

## 📦 Installation & Development

```bash
# clone the repository
git clone https://github.com/yourusername/modern-modal-ui.git
cd modern-modal-ui

# install dependencies
npm install

# set up environment (optional for backend features)
cp .env.example .env.local
# edit .env.local with your GEMINI_API_KEY if needed

# start dev server
npm run dev
```

Navigate to `http://localhost:3000` and explore the demo.

---

## 🎬 Demo

The homepage displays two buttons:
- **Open Form Modal** – Shows a sign‑up form.
- **Open Info Modal** – Shows a security notice.

Both modals feature elegant motion effects and adhere to accessibility best practices.

---

## 📄 License

 © 2026 Andreas Rio C.

