const controllers = require("../../controller");
const feed = controllers.feed;
const express = require("express");
const { utils } = require("../../middleware");
const router = express.Router();
const validation = require("../../validation");

router.post("/", [validation.validate("create-feed")], feed.create);
router.get("/", feed.findAll);
router.get("/:id", feed.findOne);
router.patch("/:id", [validation.validate("update-feed")], feed.update);
router.delete("/:id", [validation.validate("delete-feed")], feed.update);

module.exports = router;

/**
 * @swagger
 * /feed:
 *   post:
 *     summary: Create a new feed
 *     description: Create a new feed with the provided data.
 *     tags: [Feed]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the feed.
 *               mentions:
 *                 type: string
 *                 description: Mentions in the feed.
 *               media:
 *                 type: string
 *                 description: Media associated with the feed.
 *               location:
 *                 type: string
 *                 description: Location of the feed.
 *               source:
 *                 type: string
 *                 description: Source of the feed.
 *               replyTo:
 *                 type: string
 *                 description: ID of the feed being replied to.
 *               parentFeedId:
 *                 type: string
 *                 description: ID of the parent feed.
 *               visibility:
 *                 type: boolean
 *                 description: Visibility status of the feed.
 *               language:
 *                 type: string
 *                 description: Language of the feed.
 *               sentiment:
 *                 type: string
 *                 description: Sentiment of the feed.
 *               verified:
 *                 type: boolean
 *                 description: Verification status of the feed.
 *               userId:
 *                 type: integer
 *                 description: ID of the user who created the feed.
 *     responses:
 *       '200':
 *         description: Successfully created a new feed.
 */

/**
 * @swagger
 * /feed:
 *   get:
 *     summary: Get feed list
 *     description: Create a new feed with the provided data.
 *     tags: [Feed]
 *     responses:
 *       '200':
 *         description: Successfully created a new feed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 content:
 *                   type: string
 *                   description: The content of the feed.
 *                 likes:
 *                   type: integer
 *                   description: Number of likes for the feed.
 *                 retweets:
 *                   type: integer
 *                   description: Number of retweets for the feed.
 *                 hashtags:
 *                   type: string
 *                   description: Hashtags used in the feed.
 *                 mentions:
 *                   type: string
 *                   description: Mentions in the feed.
 *                 media:
 *                   type: string
 *                   description: Media associated with the feed.
 *                 location:
 *                   type: string
 *                   description: Location of the feed.
 *                 source:
 *                   type: string
 *                   description: Source of the feed.
 *                 replyTo:
 *                   type: string
 *                   description: ID of the feed being replied to.
 *                 parentFeedId:
 *                   type: string
 *                   description: ID of the parent feed.
 *                 visibility:
 *                   type: boolean
 *                   description: Visibility status of the feed.
 *                 language:
 *                   type: string
 *                   description: Language of the feed.
 *                 sentiment:
 *                   type: string
 *                   description: Sentiment of the feed.
 *                 verified:
 *                   type: string
 *                   description: Verification status of the feed.
 *                 userId:
 *                   type: string
 *                   description: ID of the user who created the feed.
 */

/**
 * @swagger
 * /feed/{id}:
 *   get:
 *     summary: Get single feed
 *     description: Create a new feed with the provided data.
 *     tags: [Feed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Feed ID
 *     responses:
 *       '200':
 *         description: Successfully created a new feed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 content:
 *                   type: string
 *                   description: The content of the feed.
 *                 likes:
 *                   type: integer
 *                   description: Number of likes for the feed.
 *                 retweets:
 *                   type: integer
 *                   description: Number of retweets for the feed.
 *                 hashtags:
 *                   type: string
 *                   description: Hashtags used in the feed.
 *                 mentions:
 *                   type: string
 *                   description: Mentions in the feed.
 *                 media:
 *                   type: string
 *                   description: Media associated with the feed.
 *                 location:
 *                   type: string
 *                   description: Location of the feed.
 *                 source:
 *                   type: string
 *                   description: Source of the feed.
 *                 replyTo:
 *                   type: string
 *                   description: ID of the feed being replied to.
 *                 parentFeedId:
 *                   type: string
 *                   description: ID of the parent feed.
 *                 visibility:
 *                   type: boolean
 *                   description: Visibility status of the feed.
 *                 language:
 *                   type: string
 *                   description: Language of the feed.
 *                 sentiment:
 *                   type: string
 *                   description: Sentiment of the feed.
 *                 verified:
 *                   type: string
 *                   description: Verification status of the feed.
 *                 userId:
 *                   type: string
 *                   description: ID of the user who created the feed.
 */

/**
 * @swagger
 * /feed/{id}:
 *   patch:
 *     summary: Update the feed
 *     description: Update the feed with the provided data.
 *     tags: [Feed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Feed ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the feed.
 *               mentions:
 *                 type: string
 *                 description: Mentions in the feed.
 *               media:
 *                 type: string
 *                 description: Media associated with the feed.
 *               likes:
 *                 type: integer
 *                 description: Total number number of likes on the feed.
 *               visibility:
 *                 type: boolean
 *                 description: Visibility status of the feed.
 *               hashtags:
 *                 type: string
 *                 description: Language of the feed.
 *               sentiment:
 *                 type: string
 *                 description: Sentiment of the feed.
 *     responses:
 *       '200':
 *         description: Successfully updated the feed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 content:
 *                   type: string
 *                   description: The content of the feed.
 *                 likes:
 *                   type: integer
 *                   description: Number of likes for the feed.
 *                 retweets:
 *                   type: integer
 *                   description: Number of retweets for the feed.
 *                 hashtags:
 *                   type: string
 *                   description: Hashtags used in the feed.
 *                 mentions:
 *                   type: string
 *                   description: Mentions in the feed.
 *                 media:
 *                   type: string
 *                   description: Media associated with the feed.
 *                 location:
 *                   type: string
 *                   description: Location of the feed.
 *                 source:
 *                   type: string
 *                   description: Source of the feed.
 *                 replyTo:
 *                   type: string
 *                   description: ID of the feed being replied to.
 *                 parentFeedId:
 *                   type: string
 *                   description: ID of the parent feed.
 *                 visibility:
 *                   type: boolean
 *                   description: Visibility status of the feed.
 *                 language:
 *                   type: string
 *                   description: Language of the feed.
 *                 sentiment:
 *                   type: string
 *                   description: Sentiment of the feed.
 *                 verified:
 *                   type: string
 *                   description: Verification status of the feed.
 *                 userId:
 *                   type: string
 *                   description: ID of the user who created the feed.
 */

/**
 * @swagger
 * /feed/{id}:
 *   delete:
 *     summary: Delete a single feed
 *     description: Create a new feed with the provided data.
 *     tags: [Feed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Feed ID
 *     responses:
 *       '200':
 *         description: Successfully deleted a feed.
 */
