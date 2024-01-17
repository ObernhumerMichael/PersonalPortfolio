/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// The credits for the colors go to the Monokai Soda terminal theme from https://gogh-co.github.io/Gogh/
				tBackground: '#1A1A1A',
				tPink: '#F4005F',
				tGreen: '#98E024',
				tOrange: '#FA8419',
				tViolet: '#9D65FF',
				tLightBlue: '#58D1EBA',
				tWhite: '#F6F6EF',
				tYellow: '#E0D561',
				tGrey: '#625E4C',
				tLightGrey: '#C4C5B5'
			},
			fontFamily: {
				//The credits for th font go to https://fonts.google.com/specimen/Ubuntu+Mono
				UbuntuMono: ['Ubuntu Mono', 'monospace']
			},
			screens: {
				tablet: '640px',
				laptop: '1366px'
			}
		}
	},
	plugins: []
};
