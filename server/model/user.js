//Friend Model
console.log('User model');
var bcrypt = require('bcrypt');

module.exports = function () {

    var mongoose = require('mongoose');

    var userSchema = new mongoose.Schema({
        first_name: { type: String },
        last_name: { type: String },
        email:
    }, { timestamps: { created_at: 'created_at', updated_at: 'updated_at' } });

    mongoose.model('User', userSchema);

    var User = mongoose.model('User');

    return User;
};