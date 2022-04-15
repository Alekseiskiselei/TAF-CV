module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: 'prettier',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		eqeqeq: 'warn',
		curly: 'error',
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
