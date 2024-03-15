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
				param("id")
					.exists()
					.withMessage("Feed ID is required")
					.trim()
					.notEmpty(),
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
				body("name")
					.exists()
					.withMessage("Resource name is required")
					.trim()
					.notEmpty(),
				body("owner_id")
					.exists()
					.withMessage("User ID is required")
					.trim()
					.notEmpty(),
				body("content_link")
					.exists()
					.withMessage("Content link is required")
					.trim()
					.notEmpty(),
			];
		}
		case "update-resource": {
			return [
				param("id")
					.exists()
					.withMessage("Resource ID is required")
					.trim()
					.notEmpty(),
				body("name")
					.exists()
					.withMessage("Resource name is required")
					.trim()
					.notEmpty(),
				body("content_link")
					.exists()
					.withMessage("Content link is required")
					.trim()
					.notEmpty(),
			];
		}
		case "delete": {
			return [
				param("id").exists().withMessage("ID is required").trim().notEmpty(),
			];
		}
		case "create-campaign": {
			return [
				body("campaign_name")
					.notEmpty()
					.withMessage("Campaign name is required")
					.isString()
					.withMessage("Campaign name must be a string"),
				body("description")
					.notEmpty()
					.withMessage("Description is required")
					.isString()
					.withMessage("Description must be a string"),
				body("start_date")
					.notEmpty()
					.withMessage("Start date is required")
					.isDate()
					.withMessage("Start date must be a valid date"),
				body("end_date")
					.notEmpty()
					.withMessage("End date is required")
					.isDate()
					.withMessage("End date must be a valid date"),
				body("organizer_id")
					.notEmpty()
					.withMessage("Organizer ID is required")
					.isString()
					.withMessage("Organizer ID must be a string"),
				body("goals").isArray().withMessage("Goals must be an array"),
				body("target_audience")
					.notEmpty()
					.withMessage("Target audience is required")
					.isString()
					.withMessage("Target audience must be a string"),
				body("messages").isArray().withMessage("Messages must be an array"),
				body("activities").isArray().withMessage("Activities must be an array"),
				body("budget_currency")
					.notEmpty()
					.withMessage("Budget currency is required")
					.isString()
					.withMessage("Budget currency must be a string"),
				body("budget")
					.notEmpty()
					.withMessage("Budget is required")
					.isNumeric()
					.withMessage("Budget must be a number"),
				body("staff")
					.notEmpty()
					.withMessage("Staff count is required")
					.isNumeric()
					.withMessage("Staff count must be a number"),
				body("volunteers")
					.notEmpty()
					.withMessage("Volunteers count is required")
					.isNumeric()
					.withMessage("Volunteers count must be a number"),
				body("target")
					.notEmpty()
					.withMessage("Target value is required")
					.isNumeric()
					.withMessage("Target value must be a number"),
				body("current_value")
					.notEmpty()
					.withMessage("Current value is required")
					.isNumeric()
					.withMessage("Current value must be a number"),
				body("evaluation_criteria")
					.isArray()
					.withMessage("Evaluation criteria must be an array"),
			];
		}

		case "update-campaign": {
			return [
				body("campaign_name")
					.optional()
					.isString()
					.withMessage("Campaign name must be a string"),
				body("description")
					.optional()
					.isString()
					.withMessage("Description must be a string"),
				body("end_date")
					.optional()
					.isDate()
					.withMessage("End date must be a valid date"),
				body("goals")
					.optional()
					.isArray()
					.withMessage("Goals must be an array"),
				body("target_audience")
					.optional()
					.isString()
					.withMessage("Target audience must be a string"),
				body("messages")
					.optional()
					.isArray()
					.withMessage("Messages must be an array"),
				body("activities")
					.optional()
					.isArray()
					.withMessage("Activities must be an array"),
				body("budget_currency")
					.optional()
					.isString()
					.withMessage("Budget currency must be a string"),
				body("budget")
					.optional()
					.isNumeric()
					.withMessage("Budget must be a number"),
				body("staff")
					.optional()
					.isNumeric()
					.withMessage("Staff count must be a number"),
				body("volunteers")
					.optional()
					.isNumeric()
					.withMessage("Volunteers count must be a number"),
				body("target")
					.optional()
					.isNumeric()
					.withMessage("Target value must be a number"),
				body("current_value")
					.optional()
					.isNumeric()
					.withMessage("Current value must be a number"),
				body("evaluation_criteria")
					.optional()
					.isArray()
					.withMessage("Evaluation criteria must be an array"),
			];
		}
	}
};
