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
        white: '#ffffffff',
        black: '#000000ff',
        text: {
          100: '#474747ff',
          200: '#3d3d3dff',
          300: '#333333ff',
          400: '#292929ff'
        },
        background: {
          100: '#f4f5f6ff',
          200: '#e8ecedff',
          300: '#dde2e4ff',
          400: '#d2d8d8ff'
        },
        primary: {
          100: '#4f5469ff',
          200: '#45495bff',
          300: '#3d4151ff',
          400: '#353846ff'
        },
        secondary: {
          100: '#dbbf95ff',
          200: '#d4b483ff',
          300: '#d0ac76ff',
          400: '#cba367ff'
        },
        accent: {
          100: '#ca7d80ff',
          200: '#c1666bff',
          300: '#be6064ff',
          400: '#b85156ff'
        },
        dark: {
          text: {
            100: '#f4f5f6ff',
            200: '#e8ecedff',
            300: '#dde2e4ff',
            400: '#d2d8d8ff'
          },
          background: {
            100: '#474747ff',
            200: '#3d3d3dff',
            300: '#333333ff',
            400: '#292929ff'
          },
          primary: {
            100: '#dbbf95ff',
            200: '#d4b483ff',
            300: '#d0ac76ff',
            400: '#cba367ff'
          },
          secondary: {
            100: '#4f5469ff',
            200: '#45495bff',
            300: '#3d4151ff',
            400: '#353846ff'
          },
          accent: {
            100: '#ca7d80ff',
            200: '#c1666bff',
            300: '#be6064ff',
            400: '#b85156ff'
          }
        }
      }
    },
    plugins: []
  }
};

export default config;
