const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    try {
        const saveUser = await user.save();
        const { hashed_password, salt, ...others } = saveUser._doc;
        res.status(201).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        // find the user based on username
        const user = await User.findOne({ username });
        !user && res.status(401).json("Incorrect Username or Password");
        // call the authentication method in the user model
        !user.authenticate(password) && res.status(401).json("Incorrect Username or Password");
        // crear el token con vencimiento en 24 horas
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: 86400 });

        const { hashed_password, salt, ...others } = user._doc;
        res.status(201).json({ ...others, token });
    } catch (error) {
        es.status(500).json(error);
    }
}