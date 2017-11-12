const Admin=require('../models/Admin')
const bcrypt = require('bcryptjs');

createAdmin = (newAdmin, callback)=>{
	bcrypt.genSalt(10, (err, salt)=>{
	    bcrypt.hash(newAdmin.password, salt, function(err, hash) {
	        newAdmin.password = hash;
	        newAdmin.save(callback);
	    });
	});
}

getAdminByUsername = (username, callback)=>{
	const query = {username: username};
	Admin.findOne(query, callback);
}

 getAdminById = (id, callback)=>{
	Admin.findById(id, callback);
}
 
comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports={createAdmin,getAdminByUsername,comparePassword,getAdminById}