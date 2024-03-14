const controllers = require("../../controller");
const event = controllers.event;
const express = require("express");
const { utils } = require("../../middleware");
const router = express.Router();
const validation = require("../../validation");

router.post("/", [validation.validate("create-event")], event.create);
router.get("/", event.findAll);
router.get("/:id", event.findOne);
router.patch("/:id", [validation.validate("update-event")], event.update);
router.delete("/:id", [validation.validate("delete")], event.delete);

module.exports = router;

/**
 * @swagger
 * /event:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     description: Create a new event with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               start:
 *                 type: string
 *                 format: date-time
 *               end:
 *                 type: string
 *                 format: date-time
 *               url:
 *                 type: string
 *               vanity_url:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               visibility:
 *                 type: boolean
 *               online_event:
 *                 type: boolean
 *               organizer_id:
 *                 type: string
 *               event_profile_picture:
 *                 type: string
 *               venue_name:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   address_1:
 *                     type: string
 *                   address_2:
 *                     type: string
 *                   city:
 *                     type: string
 *                   region:
 *                     type: string
 *                   postal_code:
 *                     type: string
 *                   country:
 *                     type: string
 *                   latitude:
 *                     type: number
 *                   longitude:
 *                     type: number
 *               format_name:
 *                 type: string
 *               password:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               locale:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created event
 *                 name:
 *                   type: string
 *                   description: The name of the event
 *                 description:
 *                   type: string
 *                   description: The description of the event
 *                 start:
 *                   type: string
 *                   format: date-time
 *                   description: The start date and time of the event
 *                 end:
 *                   type: string
 *                   format: date-time
 *                   description: The end date and time of the event
 *                 url:
 *                   type: string
 *                   description: The URL of the event
 *                 vanity_url:
 *                   type: string
 *                   description: The vanity URL of the event
 *                 is_active:
 *                   type: boolean
 *                   description: Indicates if the event is active
 *                 visibility:
 *                   type: boolean
 *                   description: Indicates the visibility status of the event
 *                 online_event:
 *                   type: boolean
 *                   description: Indicates if the event is an online event
 *                 organizer_id:
 *                   type: string
 *                   description: The ID of the event organizer
 *                 event_profile_picture:
 *                   type: string
 *                   description: The URL of the event profile picture
 *                 venue_name:
 *                   type: string
 *                   description: The name of the event venue
 *                 address:
 *                   type: object
 *                   description: The address of the event venue
 *                   properties:
 *                     address_1:
 *                       type: string
 *                       description: Address line 1
 *                     address_2:
 *                       type: string
 *                       description: Address line 2
 *                     city:
 *                       type: string
 *                       description: The city of the venue
 *                     region:
 *                       type: string
 *                       description: The region/state of the venue
 *                     postal_code:
 *                       type: string
 *                       description: The postal code of the venue
 *                     country:
 *                       type: string
 *                       description: The country of the venue
 *                     latitude:
 *                       type: number
 *                       format: float
 *                       description: The latitude coordinate of the venue
 *                     longitude:
 *                       type: number
 *                       format: float
 *                       description: The longitude coordinate of the venue
 *                 format_name:
 *                   type: string
 *                   description: The name of the event format
 *                 password:
 *                   type: string
 *                   description: The password of the event (if applicable)
 *                 capacity:
 *                   type: integer
 *                   description: The capacity of the event
 *                 locale:
 *                   type: string
 *                   description: The locale of the event
 *       '400':
 *         description: Invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /event:
 *   get:
 *     summary: Get all events
 *     description: Get a list of all events
 *     tags: [Event]
 *     responses:
 *       '200':
 *         description: Successfully fetched all events
 */

/**
 * @swagger
 * /event/{id}:
 *   get:
 *     summary: Get all events
 *     description: Get a list of all events
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event to update.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully fetched event
 */

/**
 * @swagger
 * /event/{id}:
 *   patch:
 *     summary: Update an event
 *     description: Update an existing event by its ID.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the event.
 *               description:
 *                 type: string
 *                 description: The updated description of the event.
 *               start:
 *                 type: string
 *                 format: date-time
 *                 description: The updated start time of the event.
 *               end:
 *                 type: string
 *                 format: date-time
 *                 description: The updated end time of the event.
 *               url:
 *                 type: string
 *                 description: The updated URL of the event.
 *               capacity:
 *                 type: integer
 *                 description: The updated capacity of the event.
 *               vanity_url:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               visibility:
 *                 type: boolean
 *               online_event:
 *                 type: boolean
 *               venue_name:
 *                 type: string
 *               password:
 *                 type: string
 *               address:
 *                   type: object
 *                   description: The address of the event venue
 *                   properties:
 *                     address_1:
 *                       type: string
 *                       description: Address line 1
 *                     address_2:
 *                       type: string
 *                       description: Address line 2
 *                     city:
 *                       type: string
 *                       description: The city of the venue
 *                     region:
 *                       type: string
 *                       description: The region/state of the venue
 *                     postal_code:
 *                       type: string
 *                       description: The postal code of the venue
 *                     country:
 *                       type: string
 *                       description: The country of the venue
 *                     latitude:
 *                       type: number
 *                       format: float
 *                       description: The latitude coordinate of the venue
 *                     longitude:
 *                       type: number
 *                       format: float
 *                       description: The longitude coordinate of the venue
 *     responses:
 *       '200':
 *         description: Event updated successfully.
 *       '400':
 *         description: Invalid request body.
 *       '404':
 *         description: Event not found.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /event/{id}:
 *   delete:
 *     summary: Delete a single event
 *     description: Delete a single event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully deleted a event
 */
