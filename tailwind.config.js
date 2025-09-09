/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'neon-magenta': 'var(--neon-magenta)',
                'neon-cyan': 'var(--neon-cyan)',
                sunset: 'var(--sunset)',
                midnight: 'var(--midnight)',
                'vhs-pink': 'var(--vhs-pink)',
                'vhs-purple': 'var(--vhs-purple)',
                'vhs-blue': 'var(--vhs-blue)',
                'vhs-grid': 'var(--vhs-grid)'
            },
            fontFamily: {
                display: ['var(--font-display)', 'Orbitron', 'monospace'],
                body: ['var(--font-body)', 'Montserrat', 'sans-serif']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'vhs-static':
                    'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
            },
            boxShadow: {
                'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                'glass-sm':
                    '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                'neon-magenta':
                    '0 0 20px rgba(255, 0, 160, 0.3), 0 0 40px rgba(255, 0, 160, 0.1)',
                'neon-cyan':
                    '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)',
                'vhs-glow':
                    '0 0 10px rgba(255, 94, 219, 0.5), 0 0 20px rgba(255, 94, 219, 0.3)'
            },
            animation: {
                flicker: 'flicker 1s ease-in-out infinite alternate',
                tracking: 'tracking 0.4s ease-out',
                'static-flash': 'staticFlash 0.1s ease-out',
                grain: 'grain 8s steps(10) infinite'
            },
            keyframes: {
                flicker: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.92' }
                },
                tracking: {
                    '0%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(2px) skewX(1deg)' },
                    '100%': { transform: 'translateX(0)' }
                },
                staticFlash: {
                    '0%': { opacity: '0' },
                    '50%': { opacity: '0.06' },
                    '100%': { opacity: '0' }
                }
            }
        }
    },
    plugins: []
};
