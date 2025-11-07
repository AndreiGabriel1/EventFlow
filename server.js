// --- core & config ---
const path = require('path');
const express = require('express');
const fs = require('fs');

// încarcă .env din același folder cu server.js
require('dotenv').config({ path: path.join(__dirname, '.env') });

// DEBUG — vezi exact ce vede Node
console.log('CWD =', process.cwd());
console.log('__dirname =', __dirname);
console.log('MONGODB_URI =', process.env.MONGODB_URI);


// --- db & auth deps ---
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

// --- routes ---
const authRoutes = require('./routes/auth');

// --- app ---
const app = express();

// --- views & middleware generale ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- MongoDB: conectare + apoi sesiune/passport + rute ---
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eventflow';

mongoose
  .connect(MONGO_URI, { dbName: 'eventflow' })
  .then(() => {

    console.log('✅ MongoDB connected');

    // sesiune (folosește clientul existent din mongoose)
    app.use(
      session({
        secret: process.env.SESSION_SECRET || 'devsecret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          client: mongoose.connection.getClient(),
          dbName: 'eventflow',
          collectionName: 'sessions',
          ttl: 60 * 60 * 24 * 7, // 7 zile
        }),
        cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }, // 1 zi
      })
    );

    // passport după sesiune
    app.use(passport.initialize());
    app.use(passport.session());

    // currentUser în EJS
    app.use((req, res, next) => {
      res.locals.currentUser = req.user || null;
      next();
    });

    // --- rute app ---
    const data = require('./data/mock.json');

    app.get('/', (req, res) => res.render('index', { title: 'EventFlow', data }));
    app.get('/health', (_req, res) => res.json({ ok: true }));

    // auth (/auth/register, /auth/login, /auth/logout)
    app.use('/auth', authRoutes);
    app.use('/api', require('./routes/api'));


    // protecție rute
    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated && req.isAuthenticated()) return next();
      return res.redirect('/auth/login');
    }

    app.get('/dashboard', isLoggedIn, (req, res) => {
      res.render('dashboard', { title: 'Dashboard' });
    });

    // start server DOAR după ce DB e gata
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log('[EventFlow] http://localhost:' + PORT)
    );
  })
  .catch((err) => console.error('❌ MongoDB error:', err));
