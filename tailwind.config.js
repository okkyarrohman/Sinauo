import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#006CEC",
                "primary-dark": "#0059A6",
                "primary-light": "#7FC1F7",
            },
            boxShadow: {
                custom: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            },
        },
    },

    plugins: [forms],
};
