const controllers = require("../../controller");
const resource = controllers.resource;
const express = require("express");
const router = express.Router();
const validation = require("../../validation");

router.post("/", [validation.validate("create-resource")], resource.create);
router.get("/", resource.findAll);
router.get("/:id", resource.findOne);
router.get("/:id", resource.findOne);
router.patch("/:id", [validation.validate("update-resource")], resource.update);
router.delete("/:id", [validation.validate("delete")], resource.delete);

module.exports = router;

/**
 * @swagger
 * /resource:
 *   post:
 *     summary: Create a new resource
 *     description: Create a new resource with the provided details.
 *     tags: [Resource]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the resource.
 *               format:
 *                 type: string
 *                 description: The format of the resource (e.g., docx, pdf).
 *               type:
 *                 type: string
 *                 description: The type of the resource (e.g., document, image).
 *               size:
 *                 type: string
 *                 description: The size of the resource.
 *               owner_id:
 *                 type: string
 *                 description: The ID of the owner of the resource.
 *               category:
 *                 type: string
 *                 description: The category of the resource.
 *               can_share:
 *                 type: boolean
 *                 description: Indicates whether the resource can be shared.
 *               visibility:
 *                 type: boolean
 *                 description: Indicates the visibility of the resource.
 *               parent_folder_id:
 *                 type: string
 *                 description: The ID of the parent folder of the resource.
 *               sharing_link:
 *                 type: string
 *                 description: The sharing link of the resource.
 *               content_link:
 *                 type: string
 *                 description: The content link of the resource.
 *               thumbnail:
 *                 type: string
 *                 description: The thumbnail link of the resource.
 *               description:
 *                 type: string
 *                 description: The description of the resource.
 *     responses:
 *       '201':
 *         description: Successfully created a new resource.
 *       '400':
 *         description: Bad request. Please check the request body format.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /resource:
 *   get:
 *     summary: Get all resources
 *     description: Get a list of all resources
 *     tags: [Resource]
 *     responses:
 *       '200':
 *         description: Successfully fetched all resources
 */

/**
 * @swagger
 * /resource/{id}:
 *   get:
 *     summary: Get a single resource
 *     description: Get a single resource
 *     tags: [Resource]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the resource.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully fetched a resource
 */

/**
 * @swagger
 * /resource/{id}:
 *   patch:
 *     summary: Update a existing resource
 *     description: Update a existing resource with the provided details.
 *     tags: [Resource]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Resource ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the resource.
 *               format:
 *                 type: string
 *                 description: The format of the resource (e.g., docx, pdf).
 *               type:
 *                 type: string
 *                 description: The type of the resource (e.g., document, image).
 *               size:
 *                 type: string
 *                 description: The size of the resource.
 *               category:
 *                 type: string
 *                 description: The category of the resource.
 *               can_share:
 *                 type: boolean
 *                 description: Indicates whether the resource can be shared.
 *               visibility:
 *                 type: boolean
 *                 description: Indicates the visibility of the resource.
 *               parent_folder_id:
 *                 type: string
 *                 description: The ID of the parent folder of the resource.
 *               sharing_link:
 *                 type: string
 *                 description: The sharing link of the resource.
 *               content_link:
 *                 type: string
 *                 description: The content link of the resource.
 *               thumbnail:
 *                 type: string
 *                 description: The thumbnail link of the resource.
 *               description:
 *                 type: string
 *                 description: The description of the resource.
 *     responses:
 *       '201':
 *         description: Successfully updated the resource.
 *       '400':
 *         description: Bad request. Please check the request body format.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /resource/{id}:
 *   delete:
 *     summary: Delete a single resource
 *     description: Delete a single resource
 *     tags: [Resource]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the resource.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully deleted a resource
 */
