const express = require('express');
const router = express.Router(); // isolated instance of middleware and routes.
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Band = require('../models/Bands');


//route GET endpoint: api/welcome
// get all of the bands
//private
router.get('/', async (req, res) => {
    // res.send('Get all user\'s bands');
    try {
        const bands = await Band.find({}).sort({ date: -1 });
        res.json(bands);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')

    }
});

module.exports = router; 