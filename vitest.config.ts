import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'~': __dirname,
		},
	},
	test: {
		deps: {
			fallbackCJS: true,
			interopDefault: true,
		},
	},
});
