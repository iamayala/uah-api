require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();
const cors = require("cors");

const auth = require("./route/v1/auth.route");
const feed = require("./route/v1/feed.route");

const corsOptions = {
	origin: "*",
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(
	express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);
app.use(express.json({ extended: false, limit: "50mb" }));

const optionsV1 = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "UAH API 00",
			description: "UAH API",
			version: "1.0.0",
		},
		// components: {
		// 	securitySchemes: {
		// 		JWT: {
		// 			type: "apiKey",
		// 			name: "x-access-token",
		// 			in: "header",
		// 		},
		// 	},
		// },
		servers: [
			{
				url: "http://localhost:8000",
				description: "Local",
			},
		],
	},
	apis: ["./route/v1/*.js", "./controller/*.js", "./middleware/*.js"],
};

const specs = swaggerJsdoc(optionsV1);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Use the aggregated router in your application
app.use("/auth", auth);
app.use("/feed", feed);

app.listen(process.env.PORT, () => {
	console.log(`:::::::::::::::: SERVER RUNNING ON ${process.env.PORT}.`);
});
