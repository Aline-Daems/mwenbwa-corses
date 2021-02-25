import User from "../models/user.model";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Sign = id => jwt.sign({id}, "alan_le_boss", {expiresIn: "24h"});

const encryptPassword = async password => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

const sendToken = (user, statusCode, req, res) => {
    const token = Sign(user._id);
    res.cookie("token", token, {
        expiresIn: "24h",
        httpOnly: true,
        // secure: true,
    });
    user.password = null;
    res.status(statusCode).json({
        status: "success",
        token,
        user,
    });
};

exports.register = async (req, res) => {
    const hashPassword = await encryptPassword(req.body.password);
    try {
        const newUser = await User.create({
            email: req.body.email,
            password: hashPassword,
        });
        sendToken(newUser, 201, req, res);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

exports.login = (req, res) => {
    res.status(200).json("Tout va bien");
};
