module.exports = {
	openapi: "3.0.3",
	info: {
		title: "UAH API",
		description: "UAH API",
		version: "1.0.0",
	},
	components: {
		securitySchemes: {
			JWT: {
				type: "apiKey",
				name: "x-access-token",
				in: "header",
			},
		},
	},
};
