const { body, param, query } = require("express-validator");

exports.validate = (method) => {
	switch (method) {
		case "signup": {
			return [
				body("name")
					.exists()
					.withMessage("Name is required")
					.trim()
					.escape()
					.notEmpty()
					.isAlpha("en-US", { ignore: " " })
					.withMessage("Name must contain alphabets only")
					.isLength({ min: 3, max: 22 })
					.withMessage("Name must be between 3 and 22 characters"),
				body("password")
					.exists()
					.withMessage("Password is required")
					.trim()
					.escape()
					.notEmpty()
					.isLength({ min: 8 })
					.withMessage("Password must be of min 8 characters"),
				body("user_name")
					.exists()
					.withMessage("username is required")
					.trim()
					.escape()
					.notEmpty(),
				body("phone_number")
					.trim()
					.escape()
					.isNumeric()
					.withMessage("mobile number must contain numbers only"),
				body("email_address")
					.exists()
					.withMessage("username is required")
					.trim()
					.escape()
					.notEmpty(),
				body("location")
					.exists()
					.withMessage("location is required")
					.trim()
					.escape()
					.notEmpty(),
			];
		}
		case "signin": {
			return [
				body("password")
					.exists()
					.withMessage("Password is required")
					.trim()
					.escape()
					.notEmpty()
					.isLength({ min: 8 })
					.withMessage("Password must be of min 8 characters"),
				body("email")
					.exists()
					.withMessage("Email is required")
					.trim()
					.escape()
					.notEmpty(),
			];
		}
		case "verify": {
			return [
				body("otp")
					.exists()
					.withMessage("OTP is required")
					.trim()
					.escape()
					.notEmpty(),
				body("token")
					.exists()
					.withMessage("Token is required")
					.trim()
					.notEmpty(),
			];
		}
		case "create-feed": {
			return [
				body("content")
					.exists()
					.withMessage("Content is required")
					.trim()
					.notEmpty(),
				body("userId")
					.exists()
					.withMessage("User ID is required")
					.trim()
					.notEmpty(),
			];
		}
		case "update-feed": {
			return [
				body("content")
					.exists()
					.withMessage("Content is required")
					.trim()
					.notEmpty(),
				param("id")
					.exists()
					.withMessage("Feed ID is required")
					.trim()
					.notEmpty(),
			];
		}
		case "delete-feed": {
			return [
				param("id")
					.exists()
					.withMessage("Feed ID is required")
					.trim()
					.notEmpty(),
			];
		}
	}
};
