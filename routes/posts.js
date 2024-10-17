const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Assuming 'Post' is the Mongoose model you're using

router.post('/', async (req, res) => {
    console.log(req.body, "yipppeee!");

    // Creating a new Post object with the data from the request body
    const postData = new Post({
        user: req.body.user,
        title: req.body.title,   // Corrected typo from 'ittle' to 'title'
        text: req.body.text,
        hashtag: req.body.hashtag,
        location: req.body.location,
        url: req.body.url
    });

    // Try to save the post data to the database
    try {
        const postToSave = await postData.save();
        res.status(201).json(postToSave);  // Send the saved post back in the response
    } catch (err) {
        res.status(400).json({ message: err.message });  // Send an error message in case of failure
    }
});

module.exports = router;
