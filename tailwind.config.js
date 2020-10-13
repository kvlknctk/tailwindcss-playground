const {colors} = require('tailwindcss/defaultTheme')


module.exports = {
    purge   : ["./public/**/*.html"],
    theme   : {
        extend: {
            colors  : {
                apifiz: {
                    bg     : '#f7f0ed',
                    primary: '#6e65c0'
                }
            },
            fontSize: {
                '6xl': '4rem',
                '7xl': '5rem'
            },
            height: {
                'custom': '350px'
            }
        },
    },
    variants: {},
    plugins : [],
};
