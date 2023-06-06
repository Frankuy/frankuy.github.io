module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{woff2,svg,html,json,js,css}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};