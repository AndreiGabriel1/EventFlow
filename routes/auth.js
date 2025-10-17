const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

const router = express.Router();

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) return done(null, false, { message: 'User inexistent' });
    const ok = await user.validatePassword(password);
    if (!ok) return done(null, false, { message: 'Parolă incorectă' });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try { const user = await User.findById(id); done(null, user); }
  catch (err) { done(err); }
});

router.get('/register', (req, res) => res.render('auth/register'));
router.get('/login', (req, res) => res.render('auth/login'));

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // validări basic
    if (!username || !email || !password) return res.status(400).send('Completează toate câmpurile.');
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).send('Email deja folosit.');

    const user = new User({ username, email, passwordHash: 'temp' });
    await user.setPassword(password);
    await user.save();

    // auto-login după register (opțional)
    req.login(user, (err) => {
      if (err) return res.redirect('/auth/login');
      return res.redirect('/dashboard');
    });
  } catch (e) {
    console.error(e);
    res.status(500).send('Eroare server la înregistrare');
  }
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/auth/login' }),
  (req, res) => res.redirect('/dashboard')
);

router.post('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


module.exports = router;
