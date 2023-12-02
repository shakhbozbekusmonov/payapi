/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html, js}"],
    theme: {
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            tb: "1050px",
            mb: "780px",
        },
        extend: {
            colors: {
                primaryPink: "#BA4270",
                primaryWhite: "#FBFCFE",
                secondaryBlue: "#36536B",
                secondaryDark: "#1B262F",
                secondaryPink: "#DA6D97",
                secondaryLight: "#6C8294",
            },
        },
        fontFamily: {
            sans: ["Public Sans", "sans-serif"],
        },
    },
    plugins: [],
};
