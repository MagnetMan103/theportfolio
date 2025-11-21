import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import tailwindcss_animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				'arc-palette-cutoutColor': '#ECEFF9FF',
				'arc-palette-hover': '#D7DCEDFF',
				'arc-background-gradient-color0': '#C0C0C0', // Lighter color
				'arc-palette-foregroundTertiary': '#ECEFF9FF',
				'arc-palette-foregroundSecondary': '#A0A0A0', // Lighter color
				'arc-background-gradient-color1': '#8A8A8A', // Lighter peak color
				'arc-palette-backgroundExtra': '#FDFDFEFF',
				'arc-palette-minContrastColor': '#ECEFF9FF',
				'arc-palette-background': '#EBEEF6FF',
				'arc-palette-foregroundPrimary': '#A0A0A0', // Lighter color
				'arc-palette-maxContrastColor': '#606060', // Lighter color
				'arc-palette-subtitle': '#AEB9DCFF',
				'arc-palette-title': '#101833FF',
				'arc-background-gradient-overlay-color1': '#A0A0A0', // Lighter color
				'arc-background-gradient-overlay-color0': '#00000000',
				'arc-palette-focus': '#9AA8D4FF',
			},
			animation: {
				'gradient-x': 'gradient-x 10s ease infinite', // Slower animation
			},
			keyframes: {
				'gradient-x': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
			},
		},
	},
	plugins: [tailwindcss_animate],
} satisfies Config;