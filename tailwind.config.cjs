/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				tanker: ['Tanker', 'sans-serif'],
				clash: ['Clash Display', 'sans-serif'],
				switzer: ['Switzer', 'sans-serif']
			},
			gridTemplateColumns: {
				'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))'
			}
		}
	},
	plugins: [require('daisyui')]
};
