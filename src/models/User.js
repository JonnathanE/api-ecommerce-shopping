const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        hashed_password: { type: String, required: true, unique: true },
        salt: String,
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// virtual field for password hash
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv4();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    })

// Methoss of Schema
userSchema.methods = {
    authentiate: function (plaintext) {
        return this.encryptPassword(plaintext) === this.hashed_password;
    },
    encryptPassword: function (password) {
        try {
            return crypto.createHmac('sha512', this.salt)
                .update(password)
                .digest('hex');
        } catch (error) {
            return error;
        }
    }
}

module.exports = mongoose.model('User', userSchema);