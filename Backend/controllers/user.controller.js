const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const blackListTokenModel = require('../models/blacklistToken.model')




module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password } = req.body;
    const isUserAlready = await userModel.findOne({ email })

    if (isUserAlready) {
        return res.status(400).json({ message: "User already exists" })
    }

    const hashedpassword = await userModel.hashPassword(password)

    try {
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedpassword
        })
        const token = await user.generateAuthToken()
        res.status(201).json({ token, user })
    } catch (error) {
        console.error("Tạo user lỗi:", error); // ❗ rất quan trọng
        return res.status(500).json({ message: error.message });
    }
}

module.exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await userService.findUserByEmail(email);
        console.log("User from DB: ", user)
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await userModel.comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = await user.generateAuthToken();
        res.cookie('token', token)
        res.status(200).json({ token, user });

    } catch (error) {
        next(error);
    }
};


module.exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await userService.findUserById(req.user._id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)
    } catch (e) {
        next(e)
    }

}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];;
    await blackListTokenModel.create({ token });
    res.status(200).json({ message: "Logout successfully" })
}