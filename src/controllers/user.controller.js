const User = require('../models/User');

// UPDATE USER
/* LECTURA formas de guardar la contraseña encriptada con findByIdAndUpdate():
    > https://stackoverflow.com/questions/60231253/how-to-make-mongooses-model-findbyidandupdate-trigger-model-save
    > https://riptutorial.com/mongoose/example/22636/middleware-to-hash-user-password-before-saving-it
*/
exports.update = async (req, res) => {
    // get the data sent by the user
    const { username, email, password } = req.body;
    // create a new object with the new data
    const userData = { username, email };
    // check if password was sent to update
    if (password) {
        // search the user through the id to get the user with the encryption method of the mongoose schema
        const user = await User.findById(req.user.id);
        // replace the new encrypted key
        userData.hashed_password = user.encryptPassword(password);
    }
    try {
        // a new search of the user is made and all the data is updated
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: userData }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}