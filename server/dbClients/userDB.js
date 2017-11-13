const User = require('../models/User')
const bcrypt = require('bcryptjs');

createUser = (newUser, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, function (err, hash) {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

getUserByUsername = (username, callback) => {
	const query = { username: username };
	User.findOne(query, callback);
}

getUserById = (id, callback) => {
	User.findById(id, callback);
}

comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
}

module.exports = { createUser, getUserByUsername, comparePassword, getUserById }