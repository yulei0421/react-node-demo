module.exports = function(api) {
	api.cache(false)
	const presets = [
		['@babel/preset-react'],
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'safari >= 7', 'ios >= 8']
				},
				modules: 'commonjs',
				useBuiltIns: 'usage',
				corejs: '3'
			}
		]
	]
	const plugins = [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true
			}
		],
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: false
			}
		],
		['import', {libraryName: 'antd', style: true}, 'antd'],
		[
			'import',
			{
				libraryName: 'antd-mobile',
				style: true
			},
			'antd-mobile'
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta'
	]
	return {
		presets,
		plugins
	}
}
