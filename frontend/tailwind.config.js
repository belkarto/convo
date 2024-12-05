/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	theme: {
		extend: {
			colors: {
				"vibrant-pink": "#ff277f",
				"soft-pink": "#ffa3c1",
				"deep-black": "#22283a",
				"light-black": "#2d3349",
				"slate-gray": "#6b7280",
				charcoal: "#3c3f4a",
				"cool-gray": "#f5f5f5",
				"electric-blue": "#5bc0eb",
				"warm-yellow": "#ffcf6d",
				"valiant-poppy": "#ee2e31",
				"vibrant-mint-green": "#00ffbf"
			}
		}
	},
	plugins: []
};
