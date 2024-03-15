const controllers = require("../../controller");
const campaign = controllers.campaign;
const express = require("express");
const { utils } = require("../../middleware");
const router = express.Router();
const validation = require("../../validation");

router.post("/", [validation.validate("create-campaign")], campaign.create);
router.get("/", campaign.findAll);
router.get("/:id", campaign.findOne);
router.patch("/:id", [validation.validate("update-campaign")], campaign.update);
router.delete("/:id", [validation.validate("delete")], campaign.delete);

module.exports = router;

/**
 * @swagger
 * /campaign:
 *   post:
 *     summary: Create a new campaign
 *     description: Create a new advocacy campaign with the specified details.
 *     tags: [Campaign]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               campaign_name:
 *                 type: string
 *                 description: The name of the campaign.
 *               description:
 *                 type: string
 *                 description: A description of the campaign.
 *               start_date:
 *                 type: string
 *                 format: date
 *                 description: The start date of the campaign.
 *               end_date:
 *                 type: string
 *                 format: date
 *                 description: The end date of the campaign.
 *               organizer_id:
 *                 type: string
 *                 description: The ID of the campaign organizer.
 *               goals:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The goals of the campaign.
 *               target_audience:
 *                 type: string
 *                 description: The target audience of the campaign.
 *               messages:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Key messages of the campaign.
 *               activities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Planned activities for the campaign.
 *               budget_currency:
 *                 type: string
 *                 description: The currency of the campaign budget.
 *               budget:
 *                 type: number
 *                 description: The budget allocated for the campaign.
 *               staff:
 *                 type: integer
 *                 description: The number of staff involved in the campaign.
 *               volunteers:
 *                 type: integer
 *                 description: The number of volunteers participating in the campaign.
 *               target:
 *                 type: integer
 *                 description: The target number for campaign engagement.
 *               current_value:
 *                 type: integer
 *                 description: The current value of campaign engagement.
 *               evaluation_criteria:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Criteria used to evaluate the success of the campaign.
 *     responses:
 *       '200':
 *         description: A new campaign has been created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created campaign.
 *                 message:
 *                   type: string
 *                   description: A success message indicating the creation of the campaign.
 *       '400':
 *         description: Bad request. Invalid payload data provided.
 *       '500':
 *         description: Internal server error. Failed to create the campaign.
 */

/**
 * @swagger
 * /campaign:
 *   get:
 *     summary: Get all campaigns
 *     description: Get a list of all campaigns
 *     tags: [Campaign]
 *     responses:
 *       '200':
 *         description: Successfully fetched all campaigns
 */

/**
 * @swagger
 * /campaign/{id}:
 *   get:
 *     summary: Get a single campaign
 *     description: Get a single campaign
 *     tags: [Campaign]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the campaign.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully fetched a campaign
 */

/**
 * @swagger
 * /campaign/{id}:
 *   patch:
 *     summary: Update an existing campaign
 *     description: Update an existing advocacy campaign with the specified details.
 *     tags: [Campaign]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the campaign.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               campaign_name:
 *                 type: string
 *                 description: The name of the campaign.
 *               description:
 *                 type: string
 *                 description: A description of the campaign.
 *               end_date:
 *                 type: string
 *                 format: date
 *                 description: The end date of the campaign.
 *               goals:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The goals of the campaign.
 *               target_audience:
 *                 type: string
 *                 description: The target audience of the campaign.
 *               messages:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Key messages of the campaign.
 *               activities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Planned activities for the campaign.
 *               budget_currency:
 *                 type: string
 *                 description: The currency of the campaign budget.
 *               budget:
 *                 type: number
 *                 description: The budget allocated for the campaign.
 *               staff:
 *                 type: integer
 *                 description: The number of staff involved in the campaign.
 *               volunteers:
 *                 type: integer
 *                 description: The number of volunteers participating in the campaign.
 *               target:
 *                 type: integer
 *                 description: The target number for campaign engagement.
 *               current_value:
 *                 type: integer
 *                 description: The current value of campaign engagement.
 *               evaluation_criteria:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Criteria used to evaluate the success of the campaign.
 *     responses:
 *       '200':
 *         description: A new campaign has been udpated successfully.
 *       '400':
 *         description: Bad request. Invalid payload data provided.
 *       '500':
 *         description: Internal server error. Failed to create the campaign.
 */

/**
 * @swagger
 * /campaign/{id}:
 *   delete:
 *     summary: Delete a single campaign
 *     description: Delete a single campaign
 *     tags: [Campaign]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the campaign.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully deleted a campaign
 */
