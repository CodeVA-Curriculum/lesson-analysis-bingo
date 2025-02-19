import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
				// default options are shown
				pages: 'build',
				assets: 'build',
				fallback: null
			}),
		paths: {
		  base: '/lesson-analysis-bingo', // uncomment this before deployment
		}
	  }
};

export default config;
