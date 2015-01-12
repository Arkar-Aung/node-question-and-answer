var Logger = require('winston');
var express = require('express');
var userCtrl = require('../controllers/userCtrl');
var passport = require('passport');


var users = [
    { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
  , { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }
];





module.exports = (function() {


	'use strict';


	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated())
	    return next();
	  else
	  	res.redirect('/login');
	    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
	}



	var passport_auth =	passport.authenticate('local',{ 
		successRedirect: '/',
    	failureRedirect: '/login' 
	});


	router.post('/register',passport_auth);
 
	var router = express.Router();
	
	router.get('/register',function(req,res){
		res.render('partials/register',{title:'register'});
	});

	router.get('/login',function(req,res){
		res.render('partials/login',{title:'login'});
	});

	

	router.post('/login',function(req,res){
		res.json({post:'login'});
	});

	router.get('/', ensureAuthenticated, function(req, res){
  		res.josn({post:'success'});
	});



	return router; 

})();
