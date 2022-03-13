module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                inherit: 'inherit',
            },
            textColor: {
                inherit: 'inherit',
            },
            fontSize: {
                '2xs': ['0.625rem', '.75rem'],
            },
            keyframes: {
                ripple: {
                    '0%': { opacity: '0' },
                    '25%': { opacity: '0.25' },
                    '100%': {
                        width: '200%',
                        'padding-bottom': '200%',
                        opacity: '0',
                    },
                },
            },
            animation: {
                ripple: 'ripple 300ms ease-in',
                'spin-fast': 'spin 1s linear infinite',
                spin: 'spin 3s linear infinite',
                'spin-slow': 'spin 5s linear infinite',
            },
        },
        letterSpacing: {
            '2tight': '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            '2wide': '.05em',
            '3wide': '.075em',
            '4wide': '.1em',
        },
    },
    variants: {
        extend: {
            backgroundColor: [
                'active',
                'checked',
                'even',
                'group-focus',
                'odd',
            ],
            backgroundOpacity: ['active'],
            borderColor: ['checked'],
            borderWidth: ['first', 'last'],
            boxShadow: ['active'],
            divideColor: ['group-hover'],
            fontSize: ['hover', 'focus'],
            opacity: ['disabled'],
            scale: ['focus-within'],
        },
    },
    plugins: [],
}
