import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                "main": "#242424",
                "elements": "#C292FF"
            },
            textColor: {
                "elements": "#C292FF"
            },
            borderColor: {
                "elements": "#C292FF"
            }
        },
    },
    plugins: [],
}
export default config
