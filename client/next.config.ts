import withLess from "@zeit/next-less";

// Where your antd-custom.less file lives
const config = withLess({
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: {
			"@body-background": "#3AAFA9",
			"@component-background": "#3AAFA9",
			"@disabled-color": "#000000",
			"@heading-color": "#FEFFFF",
			"@primary-color": "#3AAFA9",
			"@text-color": "#DEF2F1",
			"@text-color-secondary": "#FEFFFF",
		},
		sourceMap: true,
	},
	useFileSystemPublicRoutes: false,
	// tslint:disable-next-line: no-shadowed-variable
	webpack: (config: any, { isServer }) => {
		config.module.rules.push({
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
					loader: "babel-loader",
				},
				{
					loader: "@svgr/webpack",
					options: {
						babel: false,
						icon: true,
					},
				},
			],
		});
		if (isServer) {
			const antStyles = /antd\/.*?\/style.*?/;
			const origExternals = [...config.externals];
			config.externals = [
				(context, request, callback) => {
					if (request.match(antStyles)) { return callback(); }
					if (typeof origExternals[0] === "function") {
						origExternals[0](context, request, callback);
					} else {
						callback();
					}
				},
				...(typeof origExternals[0] === "function" ? [] : origExternals),
			];

			config.module.rules.unshift({
				test: antStyles,
				use: "null-loader",
			});

		}
		return config;
	},
});
export default config;
