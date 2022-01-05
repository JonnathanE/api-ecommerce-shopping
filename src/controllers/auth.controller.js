const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    try {
        const saveUser = await user.save();
        const {hashed_password, salt, ...others} = saveUser._doc;
        res.status(201).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
}