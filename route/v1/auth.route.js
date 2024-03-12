const controllers = require("../../controller");
const auth = controllers.auth;
const express = require("express");
const { utils } = require("../../middleware");
const router = express.Router();
const validation = require("../../validation");

router.post(
	"/signup",
	[utils.checkExistingUsername, validation.validate("signup")],
	auth.signup
);
router.post("/signin", [validation.validate("signin")], auth.signin);
router.post("/verify", [validation.validate("verify")], auth.verify);

module.exports = router;

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
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
 *               phone_number:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - user_name
 *               - email_address
 *               - phone_number
 *               - password
 *     responses:
 *       '200':
 *         description: User registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 mobile:
 *                   type: string
 *                 accessToken:
 *                   type: string
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 type:
 *                   type: string
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Sign In with login credentials
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: OTP sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 mobile:
 *                   type: string
 *                 accessToken:
 *                   type: string
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 type:
 *                   type: string
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     summary: Verify with the OTP sent to your email address
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               otp:
 *                 type: string
 *               token:
 *                 type: string
 *             required:
 *               - otp
 *               - token
 *     responses:
 *       '200':
 *         description: OTP validated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 user_name:
 *                   type: string
 *                 email_address:
 *                   type: string
 *                 phone_number:
 *                   type: string
 *                 accessToken:
 *                   type: string
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 type:
 *                   type: string
 *                 message:
 *                   type: string
 */
