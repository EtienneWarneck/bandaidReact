const express = require('express');
const router = express.Router(); // isolated instance of middleware and routes.
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Band = require('../models/Bands');


//route GET endpoint: api/bands
// get all of the user's bands
//private
router.get('/', auth, async (req, res) => {
    // res.send('Get all user\'s bands');
    try {
        const bands = await Band.find({ user: req.user.id }).sort({ date: -1 });
        res.json(bands);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')

    }
});


//route POST endpoint: api/bands
// Add new bands
//private
router.post('/', [auth,
    [
        check('name', 'name is required').not().isEmpty()
    ]
], async (req, res) => {
    // res.send('Add a band');
    const errors = validationResult(req); //validator
    //if errors
    if (!errors.isEmpty()) {
        //return 400 bad request with errors.User typed wrong data
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type, genre, description, youtubeVideoId } = req.body;

    try {
        const newBand = new Band({
            name,
            email,
            phone,
            type,
            genre,
            description,
            youtubeVideoId,
            user: req.user.id
        })

        const band = await newBand.save()
        res.json(band)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

//route PUT endpoint: api/bands
//update bands
//private
router.put('/:id', auth, async (req, res) => {
    // res.send('Update band');
    const { name, email, phone, type, genre, description, youtubeVideoId } = req.body;

    //Build band object:
    const bandField = {};
    if (name) bandField.name = name;
    if (email) bandField.email = email;
    if (phone) bandField.phone = phone;
    if (type) bandField.type = type;
    if (type) bandField.genre = genre;
    if (type) bandField.description = description;
    if (type) bandField.youtubeVideoId = youtubeVideoId;

    try {
        let band = await Band.findById(req.params.id);

        if (!band) return res.status(404).json({ msg: 'Band not found' });

        //Make sure user owns band
        //band.user not a string //req.user.id is string 
        if (band.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        band = await Band.findByIdAndUpdate(req.params.id,
            { $set: bandField },
            { new: true } //if that band field doesn't exist create it.
        )
        res.json(band)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
});

//route DELETE endpoint: api/bands
//delete bands
//private
router.delete('/:id', auth, async (req, res) => {
    // res.send('Delete band');
    try {
        let band = await Band.findById(req.params.id);

        if (!band) return res.status(404).json({ msg: 'Band not found' });

        if (band.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        await Band.findByIdAndRemove(req.params.id)

        res.json({ msg: 'Band removed!' });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }

});



module.exports = router; 