module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{woff2,svg,html,json,js,css}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};