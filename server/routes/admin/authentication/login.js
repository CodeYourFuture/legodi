const express = require('express');
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models/User');
const UserDB = require('../../../dbClients/userDB');


router.get('/login', (req, res) => {
	res.render('login', { layout: false })
});

// use users/register/codeyourfuture135 to create username and password to access adminstration
//I will get rid of this link after all guys creatte an account in his local

router.get('/register', (req, res) => {
	res.render('register');
});

// Register
router.get('/register', ensureAuthenticated, (req, res) => {
	res.render('register');// Register
});

// Login
router.get('/login', (req, res) => {
	res.render('login');
});

// Register User
router.post('/register', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const password2 = req.body.password2;
	const isAdmin = req.body.isAdmin;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('isAdmin', 'isAdmin is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	const errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			errors: errors
		});
	} else {
		const newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password,
			isAdmin: isAdmin
		});

		UserDB.createUser(newUser, (err, User) => {
			if (err) throw err;
 		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});

passport.use(new LocalStrategy(
	(username, password, done) => {
		UserDB.getUserByUsername(username, (err, user) => {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown user' });
			}

			UserDB.comparePassword(password, user.password, (err, isMatch) => {
				if (err) throw err;
				if (isMatch) {
					userName=username;						
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser((user, done) => {
	userId=user.id;
	
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	UserDB.getUserById(id, (err, user) => {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	(req, res) => {
	    res.redirect('/');
	});

router.get('/logout', (req, res) => {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});


module.exports = router;