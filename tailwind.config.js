// tailwind.config.js
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'], // pastikan ini sesuai dengan struktur folder kamu
	theme: {
		extend: {
			keyframes: {
				'bounce-soft': {
					'0%, 100%': {
						transform: 'translateY(-10%)',
						animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
					}
				}
			},
			animation: {
				'bounce-soft': 'bounce-soft 1s infinite'
			}
		}
	},
	plugins: []
};
