const bgColor = '#111012'
const primaryColor = '#fff'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: primaryColor,
				bgColor,
			},
			borderRadius: {},
		},
	},
	plugins: [],
}
