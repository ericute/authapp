const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//DB Connection
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

const app = express();
const port = 3000;

const users = require('./routes/users');

// CORS Middleware
app.use(cors());

// Set Static Folder | Client is the whole Angular Application
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint.');
});

// Users Route
app.use('/users', users);

// All routes will be sent to angular
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular-src/public/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});