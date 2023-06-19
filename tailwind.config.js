/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^bg-/,
      variants: ['blue', 'green', 'red']
    },
    {
      pattern: /^text-/,
      variants: ['blue', 'green', 'red']
    }
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpEnter: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: 100,
            transform: 'translateY(0px)'
          }
        },
        slideLeave: {
          '0%': {
            opacity: 100,
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          }
        }
      },
      animation: {
        'slide-enter': ' slideUpEnter .3s ease-in-out',
        'slide-leave': ' slideLeave .3s ease-in-out'
      },
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        primary: '#201f27',
        secundary: '#2E3038',
        link: '#f72585'
      }
    }
  },
  plugins: []
};
