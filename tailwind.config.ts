import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': 'var(--purple-light)',
        'purple-dark': 'var(--purple-dark)',
        'white-10': 'var(--white-10)',
        'white-20': 'var(--white-20)',
        'black-10': 'var(--black-10)',
        'google-blue': 'var(--google-blue)',
        'google-green': 'var(--google-green)',
        'google-yellow': 'var(--google-yellow)',
        'google-red': 'var(--google-red)',
        'success': 'var(--success)',
        'danger': 'var(--danger)',
        'orange-dark': 'var(--orange-dark)',
        'orange': 'var(--orange)',
        'orange-light': 'var(--orange-light)',
        'white-50': 'var(--white-50)',
        'white': 'var(--white)',
        'blue-dark': 'var(--blue-dark)',
        'blue': 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        'grey': 'var(--grey)',
        'yellow': 'var(--yellow)',
      },
    },
  },
  plugins: [],
} satisfies Config
