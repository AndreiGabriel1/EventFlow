// server.js — EventFlow
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory mock (replace with Mongo)
const data = require('./data/mock.json');

app.get('/', (req, res) => res.render('index', { title: 'EventFlow', data }));
app.get('/health', (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('[EventFlow] http://localhost:' + PORT));
