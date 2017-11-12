const express = require('express');
const router = express.Router();
const passport= require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../../../models/Admin');
const AdminDB = require('../../../dbClients/adminDB');


router.get('/login',(req,res)=>{
res.render('login',{layout:false})
});

 // This is temporary route to allow my team member to add an admin to their db
router.get('/register/codeyourfuture135', (req, res)=>{
	res.render('register');
});

// Register
router.get('/register',ensureAuthenticated, (req, res)=>{
	res.render('register');// Register
});

// Login
router.get('/login', (req, res)=>{
	res.render('login');
});

// Register User
router.post('/register', (req, res)=>{
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	const errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		const newAdmin = new Admin({
			name: name,
			email:email,
			username: username,
			password: password
		});

		AdminDB.createAdmin(newAdmin, (err, Admin)=>{
			if(err) throw err;
			console.log(Admin);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/admins/login');
	}
});

passport.use(new LocalStrategy(
   (username, password, done)=>{
	AdminDB.getAdminByUsername(username, (err, admin)=>{
   	if(err) throw err;
   	if(!admin){
   		return done(null, false, {message: 'Unknown Admin'});
   	}

   	AdminDB.comparePassword(password, admin.password,(err, isMatch)=>{
   		if(err) throw err;
   		if(isMatch){
   			return done(null, admin);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser((admin, done) =>{
  done(null, admin.id);
});

passport.deserializeUser((id, done)=>{
	AdminDB.getAdminById(id, (err, admin)=>{
    done(err, admin);
  });
});

router.post('/login',
passport.authenticate('local', {successRedirect:'/', failureRedirect:'/admins/login',failureFlash: true}),
(req, res)=>{
  res.redirect('/');
});

router.get('/logout', (req, res)=>{
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/admins/login');
});


module.exports = router;