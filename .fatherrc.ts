export default {
	cjs: {
		type: 'babel',
		minify: true,
		lazy: true
	},
	esm: {
		type: 'babel'
	},
	umd: {
		name: 'ReactHooksTools',
		globals: { react: 'React' },
		sourcemap: false
	},
	runtimeHelpers: true
};
