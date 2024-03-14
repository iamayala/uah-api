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
		case "create-event": {
			return [
				body("name").exists().withMessage("Name is required").trim().notEmpty(),
				body("description")
					.exists()
					.withMessage("Description is required")
					.trim()
					.notEmpty(),
				body("start").exists().withMessage("Start date is required"),
				body("end").exists().withMessage("End date is required"),
				body("is_active")
					.exists()
					.withMessage("Active status is required")
					.isBoolean()
					.withMessage("Active status must be a boolean"),
				body("visibility")
					.exists()
					.withMessage("Visibility status is required")
					.isBoolean()
					.withMessage("Visibility status must be a boolean"),
				body("online_event")
					.exists()
					.withMessage("Online event status is required")
					.isBoolean()
					.withMessage("Online event status must be a boolean"),
				body("organizer_id")
					.exists()
					.withMessage("Organizer ID is required")
					.trim()
					.notEmpty(),
				body("venue_name")
					.exists()
					.withMessage("Venue name is required")
					.trim()
					.notEmpty(),
				body("address")
					.exists()
					.withMessage("Address is required")
					.isObject()
					.withMessage("Address must be an object"),
				body("format_name")
					.exists()
					.withMessage("Format name is required")
					.trim()
					.notEmpty(),
				body("capacity")
					.exists()
					.withMessage("Capacity is required")
					.isInt({ min: 5 })
					.withMessage("Capacity must be a positive integer"),
			];
		}
		case "update-event": {
			return [
				body("description")
					.exists()
					.withMessage("Description is required")
					.trim()
					.notEmpty(),
				body("start").exists().withMessage("Start date is required"),
				body("end").exists().withMessage("End date is required"),
				body("is_active")
					.exists()
					.withMessage("Active status is required")
					.isBoolean()
					.withMessage("Active status must be a boolean"),
				body("visibility")
					.exists()
					.withMessage("Visibility status is required")
					.isBoolean()
					.withMessage("Visibility status must be a boolean"),
				body("online_event")
					.exists()
					.withMessage("Online event status is required")
					.isBoolean()
					.withMessage("Online event status must be a boolean"),
				body("venue_name")
					.exists()
					.withMessage("Venue name is required")
					.trim()
					.notEmpty(),
				body("address").exists().withMessage("Address is required"),
				body("capacity")
					.exists()
					.withMessage("Capacity is required")
					.isInt({ min: 5 })
					.withMessage("Capacity must be a positive integer"),
			];
		}
		case "create-resource": {
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
	}
};
