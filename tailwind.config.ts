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
          default: '#353839ff'
        },
        background: {
          default: '#d2d9dbff'
        },
        primary: {
          default: '#45495bff',
          lighter: '#595d6eff',
          darker: '#303443ff'
        },
        secondary: {
          default: '#d4b483ff',
          lighter: '#ddbf9bff',
          darker: '#b8966bff'
        },
        accent: {
          default: '#c1666bff',
          lighter: '#cc7f81ff',
          darker: '#a34f54ff'
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
            lighter: '#ddbf9bff',
            darker: '#b8966bff'
          },
          secondary: {
            default: '#45495bff',
            lighter: '#595d6eff',
            darker: '#303443ff'
          },
          accent: {
            default: '#c1666bff',
            lighter: '#cc7f81ff',
            darker: '#a34f54ff'
          }
        }
      }
    },
    plugins: []
  }
};

export default config;
