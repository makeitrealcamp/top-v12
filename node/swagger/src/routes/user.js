const router = require("express").Router();
const userController = require("../controllers/user.controller");

// Documentación swagger
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The Auto-generated id of a post
 *         password:
 *           type: string
 *           description: id of author
 *       example:
 *         email: faker@test.com
 *         paswsword: 1234
 *     UserResponse:
 *        type: object
 *          - message
 *          - token
 *        properties:
 *          message:
 *            type: string
 *            description: User created successfully
 *          token:
 *            type: string
 *            description: JWT token
 */

/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: Usuarios de Make It Real
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Returns all posts
 *     tags: [Users]
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *      required: true
 *     responses:
 *       201:
 *        description: (OK) User found successfully.
 *        content:
 *         application/json
 *        schema:
 *          type: object
 *          items:
 *           $ref: '#/components/schemas/UserResponse'
 */

router.route("/signup").post(userController.signup);

module.exports = router;
