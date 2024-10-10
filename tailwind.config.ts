import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000ff',
        white: '#ffffffff',
        text: {
          default: '#353839ff',
          lighter: '#4f5469ff',
          darker: '#3d4151ff'
        },
        background: {
          default: '#d2d9dbff',
          lighter: '#dde2e4ff',
          darker: '#c6cfd2ff'
        },
        primary: {
          default: '#45495bff',
          lighter: '#4f5469ff',
          darker: '#3d4151ff'
        },
        secondary: {
          default: '#d4b483ff',
          lighter: '#dbbf95ff',
          darker: '#d0ac76ff'
        },
        accent: {
          default: '#c1666bff',
          lighter: '#ca7d80ff',
          darker: '#be6064ff'
        },
        dark: {
          black: {
            default: '#000000ff'
          },
          white: {
            default: '#ffffffff'
          },
          text: {
            default: '#d2d9dbff'
          },
          background: {
            default: '#353839ff'
          },
          primary: {
            default: '#d4b483ff',
            lighter: '#dbbf95ff',
            darker: '#d0ac76ff'
          },
          secondary: {
            default: '#45495bff',
            lighter: '#4f5469ff',
            darker: '#3d4151ff'
          },
          accent: {
            default: '#c1666bff',
            lighter: '#ca7d80ff',
            darker: '#be6064ff'
          }
        }
      }
    },
    plugins: []
  }
};

export default config;
