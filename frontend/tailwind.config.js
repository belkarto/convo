/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
	theme: {
		extend: {
			colors: {
				"bg-1": "#f8f3ef",
				"primary-1": "rgba(221, 159, 130, 1)",
				"primary-1-2": "rgba(220, 171, 147, 1)",
				"primary-1-3": "rgba(219, 182, 163, 1)",
				"primary-1-4": "rgba(217, 193, 182, 1)",
				"primary-1-5": "rgba(219, 200, 191, 1)",
				"primary-1-6": "rgba(217, 205, 200, 1)",
				"primary-1-7": "rgba(218, 210, 207, 1)",
				"primary-2": "rgba(183, 104, 69, 1)",
				"primary-3": "rgba(37, 40, 43, 1)",
				"primary-3-2": "rgba(82, 87, 92, 1)",
				"primary-3-3": "rgba(160, 164, 168, 1)",
				"primary-3-4": "rgba(202, 204, 207, 1)",
				"primary-3-5": "rgba(219, 221, 224, 1)",
				"primary-3-6": "rgba(232, 232, 232, 1)",
				"primary-3-7": "rgba(249, 249, 250, 1)",
				"primary-4": "rgba(0, 0, 0, 1)",
				positive: "rgba(47, 197, 110, 1)",
				"positive-2": "rgba(32, 181, 94, 1)",
				"positive-3": "rgba(68, 219, 131, 1)",
				warning: "rgba(244, 165, 49, 1)",
				"warning-2": "rgba(230, 151, 44, 1)",
				"warning-3": "rgba(253, 187, 61, 1)",
				negative: "rgba(249, 82, 85, 1)",
				"negative-2": "rgba(231, 64, 68, 1)",
				"negative-3": "rgba(253, 101, 103, 1)",
				white: "rgba(255, 255, 255, 1)"
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"]
			},
			maxWidth: {
				"screen-lg": "1920px"
			}
		}
	},
	plugins: []
};
