/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          faint: '#E8F5B0',
          subtle: '#D4ED8A',
          hint: '#C1E464',
          soft: '#B5D94A',
          mid: '#ACCE3D',
          bold: '#9BBF35',
          firm: '#8AB02D',
          intense: '#79A125',
          deep: '#68921D',
          container: '#F4F6F0',
        },
        ink: {
          faint: '#E8ECE9',
          subtle: '#D1D9D3',
          hint: '#BAC6BD',
          soft: '#A3B3A7',
          mid: '#173B26',
          bold: '#143321',
          firm: '#112B1C',
          intense: '#0E2317',
          deep: '#0B1B12',
          container: '#15241A',
        },
        neutral: {
          faint: '#F5F6F5',
          subtle: '#E8E9E8',
          hint: '#D1D2D1',
          soft: '#B9BAB9',
          mid: '#6D786F',
          bold: '#5A635C',
          firm: '#474E49',
          intense: '#343B36',
          deep: '#212822',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          container: {
            DEFAULT: '#F8F8F8',
            high: '#FFFFFF',
          },
          hover: '#F5F6F5',
          pressed: '#E8E9E8',
          selected: '#C1E464',
        },
        text: {
          primary: '#101410',
          secondary: '#515B53',
          disabled: '#B9BAB9',
          display: '#101410',
          'display-alt': '#9BBF35',
          heading: '#101410',
          link: '#9BBF35',
        },
        success: {
          DEFAULT: '#ACCE3D',
          container: '#C1E464',
        },
        error: {
          DEFAULT: '#173B26',
          container: '#BAC6BD',
        },
        warning: {
          DEFAULT: '#ACCE3D',
          container: '#C1E464',
        },
        info: {
          DEFAULT: '#173B26',
          container: '#BAC6BD',
        },
        outline: {
          DEFAULT: '#C4C8C5',
          variant: '#E0E2E0',
        },
        shadow: '#101410',
        glow: '#C1E464',
        white: '#FFFFFF',
        black: '#101410',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', '"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '48px',
      },
      boxShadow: {
        'sm': '0 2px 6px 0 rgba(11, 24, 14, 0.06)',
        'md': '0 2px 4px -1px rgba(11, 24, 14, 0.07), 0 12px 24px -4px rgba(11, 24, 14, 0.10)',
        'lg': '0 4px 8px -2px rgba(11, 24, 14, 0.06), 0 20px 40px -8px rgba(11, 24, 14, 0.12)',
      },
    },
  },
  plugins: [],
}
