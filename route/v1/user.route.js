const controllers = require("../../controller");
const user = controllers.user;
const express = require("express");
const router = express.Router();
const validation = require("../../validation");

router.get("/:id", user.findOne);
router.patch("/:id", [validation.validate("update-user")], user.update);
router.delete("/:id", [validation.validate("delete")], user.delete);

module.exports = router;

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a single user
 *     description: Get a single user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully fetched a user
 */

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Update user profile
 *     description: Update user profile information.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user.
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
 *               user_name:
 *                 type: string
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *               email_address:
 *                 type: string
 *                 format: email
 *               phone_number:
 *                 type: string
 *               profile_location:
 *                 type: string
 *               url:
 *                 type: string
 *                 format: url
 *               protected:
 *                 type: boolean
 *               followers_count:
 *                 type: integer
 *                 minimum: 0
 *               verified:
 *                 type: boolean
 *               language:
 *                 type: string
 *               profile_image_url:
 *                 type: string
 *                 format: url
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: User profile updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a single user
 *     description: Delete a single user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully deleted a user
 */
