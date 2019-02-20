const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const { check, validationResult } = require('express-validator/check');
const _ = require('lodash');

exports.loginForm = (req, res) => {
  res.render('login', {title: 'Login'});
};

exports.registerForm = (req, res) => {
  res.render('register', {title: 'Register'});
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name.').notEmpty();
  req.checkBody('email', 'That email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank').notEmpty();
  req.checkBody('password-confirm', 'Confirm Password cannot be blank').notEmpty();
  req.checkBody('password-confirm', 'Your passwords do not match!').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    // req.flash('error', errors.map(err => err.msg));
    // res.render('register', {title: 'Register', body: req.body, flashes: req.flash()})
  }
  // var body = _.pick(req.body, ['email', 'name', 'password']);
  // res.send(body)
  // var user = new User(body);
  // user.save()
  // .then((user) =>{
  //   res.send(`User ${user.name} has been added to the database`);
  // })
  // .catch((err) => {
  //   res.send(err.message);
  // });
  next();
};

exports.register = async (req, res, next) => {
  var body = _.pick(req.body, ['name', 'email', 'password']);
  const user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
    // res.render('addedtodb', {title:'Thanks', name: user.name});
  }).then((token) => {
    res.header('x-auth', token).render('addedtodb', {title:'Thanks', name: user.name, email: user.email});
  }).catch((e) => {
    res.status(400).send(e);
  })
};

exports.privateReq = (req, res) => {
  res.send(req.user);
};

exports.authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};
