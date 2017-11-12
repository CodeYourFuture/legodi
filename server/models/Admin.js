const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// Admin Schema
const schema = new Schema({
    username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

const Admin = mongoose.model('admin', schema);

module.exports = Admin;
