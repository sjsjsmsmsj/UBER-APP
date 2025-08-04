const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller') // hoặc đúng tên file chứa registerUser

const authMiddleware = require('../middlewares/auth.middleware')

router.post('/login', userController.loginUser)

router.post('/register', [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], userController.registerUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

module.exports = router;