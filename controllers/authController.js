const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config')

exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message: 'Username, email and password required'});
        }
        const existingUser = await User.findOne({$or: [{email}, {username}]});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }
        const user = new User({username, email, password});

        await user.save();

        const token = jwt.sign({id: user._id}, config.jwtSecret, {expiresIn: '48h'});
        return res.status(201).json({token, user: {id: user._id, username, email}});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong'});
    }
};


exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'Please enter your email and password'});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Wrong email'});
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({message: 'Wrong password'});
        }

        const token = jwt.sign({id: user._id}, config.jwtSecret, {expiresIn: '48h'});
        return res.status(200).json({token, user: {id: user._id, username: user.username, email: user.email}});
    } catch (err) {
        console.log(err);
        return res(500).json({message: 'Something went wrong'});
    }
}