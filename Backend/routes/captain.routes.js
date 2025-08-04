const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller')


router.post('/register', [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    body('fullname.lastname').isLength({ min: 3 }).withMessage("Last name must be at least 3 characters"),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Color must be at least 3 characters"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Plate must be at least 3 characters"),
    body('vehicle.capacity').isNumeric().withMessage("Capicity must be a number"),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid vehicle type"),
], captainController.registerCaptain)


module.exports = router;