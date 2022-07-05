/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            boxShadow: {
                card: '4px 16px 32px rgba(70, 87, 147, 0.12)',
            },
            colors: {
                primary: '#6865FA',
                secondary: '#DDF247',
                dark: '#101010',
                gray50: '#F1F1F1',
                gray100: '#F8F8F8',
                gray150: '#E9E9E9',
                gray200: '#EBEBEB',
                gray500: '#6F6F6F',
                gray800: '#999999',
            },
            fontFamily: {
                sans: ['"Urbanist"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
