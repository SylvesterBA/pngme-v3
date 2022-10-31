/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-beige": "#F1EEE8",
				"primary-purple": "#300038",
				"primary-pink": "#E824B1",
				"primary-dark": "#2E2B26",
				"pink-light": "#FFE9F9",
				"primary-yellow": "#FFC01F",
				"secondary-beige": "#F8F7F4",
				"secondary-pink": "#F961CE",
				"secondary-yellow": "#FFE08F",
				"body-gray-dark": "#00000099",
				"body-gray": "#00000066",
				"body-gray-light": "#0000004D",
				"body-black-light": "#0C0C0CCC",
				"body-white": "#D1D5DB",
				"dirty-white": "#F8F6F3",
				"white": "#FFFFFF"
			},
			fontFamily: {
				"pngme-helvetica": [
					'"Helvetica Neue LT Pro 43 Light Extended"',
					'"Helvetica Neue LT Pro 65 Medium"',
					"sans-serif",
				],
				"pngme-inter": ["Inter", "sans-serif"],
			},
			fontSize: {
				"fs-60": "60px",
				"fs-44": "44px",
				"fs-40": "40px",
				"fs-36": "36px",
				"fs-32": "32px",
				"fs-28": "28px",
				"fs-26": "26px",
				"fs-22": "22px",
				"fs-20": "20px",
				"fs-18": "18px",
				"fs-16": "16px",
				"fs-14": "14px",
				"fs-12": "12px",
			},
			screens: {
				"3xl": '2000px',
			}
		},
	},
	plugins: [],
};
