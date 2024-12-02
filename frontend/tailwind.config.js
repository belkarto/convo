/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	theme: {
		extend: {
			colors: {
				"vibrant-pink": "#ff528b",
				"soft-pink": "#ffa3c1",
				"deep-black": "#22283a",
				"slate-gray": "#6b7280",
				charcoal: "#3c3f4a",
				"cool-gray": "#f5f5f5",
				"electric-blue": "#5bc0eb",
				"warm-yellow": "#ffcf6d",
				"mint-green": "#72d6c9"
			}
		}
	},
	plugins: []
};
