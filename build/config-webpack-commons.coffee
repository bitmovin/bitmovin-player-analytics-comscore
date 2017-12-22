moduleDevConfig =
	rules: [
		test: /\.coffee$/
		exclude: /node_modules/
		use: [
				loader: 'babel-loader'
				options: presets: [ 'env' ]
			,
				loader: 'coffee-loader'
				options: sourceMap: true
		]
	]


coreExtensions = [
	'.js'
	'.jsx'
	'.ts'
	'.coffee'
]

externals =
	BitmovinBundle: 'bitmovin'
	streamsense: 'ns_'

rules =
	coffee:
		test: /\.coffee$/,
		use: [
			loader: 'coffee-loader'
			options:
				sourceMap: true
		]
	pug:
		test: /\.pug$/,
		use: [
			loader: 'pug-loader'
			options:
				sourceMap: true
		]

module.exports =
	moduleDevConfig: moduleDevConfig
	coreExtensions: coreExtensions
	externals: externals
	rules: rules
