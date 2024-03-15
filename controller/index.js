const auth = require("./auth.controller.js");
const feed = require("./feed.controller.js");
const event = require("./event.controller.js");
const resource = require("./resource.controller.js");
const campaign = require("./campaign.controller.js");

module.exports = {
	auth,
	feed,
	event,
	resource,
	campaign,
};
