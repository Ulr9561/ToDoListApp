/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                "cyan-500": "#01a9ac",
                "cyan-600": "#01dbdf",
            },
            keyframes: {
                float: {
                    "0%": {
                        boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
                        transform: "translatey(-20px)",
                    },
                    "100%": {
                        boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
                        transform: "translatey(0px)",
                    },
                },
            },
            animation: {
                float: "float 2s ease-in-out infinite",
            },
        },
        plugins: [],
    },
};

