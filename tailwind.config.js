// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8", // Biru yang lebih redup
          light: "#dbeafe",
          muted: "#93c5fd",
        },
        background: {
          DEFAULT: "#f8fafc", // Warna background redup
          light: "#f1f5f9",
        },
        card: {
          DEFAULT: "#ffffff", // Putih lembut
          muted: "#f8fafc",
        },
        text: {
          DEFAULT: "#1e293b", // Hitam redup
          muted: "#64748b",
        },
        border: {
          DEFAULT: "#e2e8f0",
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}