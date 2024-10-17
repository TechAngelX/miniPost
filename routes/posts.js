const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); 

// POST (Create data - C from CRUD)
router.post('/', async (req, res) => {
    console.log(req.body, "yipppeee!");

    const postData = new Post({
        user: req.body.user,
        title: req.body.title,
        text: req.body.text,
        hashtag: req.body.hashtag,
        location: req.body.location,
        url: req.body.url
    });

    try {
        const postToSave = await postData.save();
        res.status(201).json(postToSave);  // Send the saved post back in the response
    } catch (err) {
        res.status(400).json({ message: err.message });  // Send an error message in case of failure
    }
});

// GET (Read all data - R from CRUD)
router.get('/', async (req, res) => {
    try {
        const getPosts = await Post.find().limit(10);  // Fetch all posts
        res.status(200).json(getPosts);  // Send the retrieved posts
    } catch (err) {
        res.status(500).json({ message: err.message });  // Handle server errors
    }
});

// GET (Read specific data by ID - R from CRUD)
router.get('/:postId', async (req, res) => {  // Use `:postId` as a dynamic route parameter
    try {
        const getPostById = await Post.findById(req.params.postId).limit(10);  // Fetch post by ID
        if (!getPostById) {
            return res.status(404).json({ message: 'Post not found' });  // Handle not found
        }
        res.status(200).json(getPostById);  // Send the retrieved post
    } catch (err) {
        res.status(500).json({ message: err.message });  // Handle server errors
    }
});

// PATCH (Update specific data by ID - U from CRUD)
router.patch('/:postId', async (req, res) => {  // Use `:postId` as a dynamic route parameter
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },  // Find post by ID
            {
                $set: {
                    user: req.body.user,
                    title: req.body.title,
                    text: req.body.text,
                    hashtag: req.body.hashtag,
                    location: req.body.location,
                    url: req.body.url
                }
                
            }
        );                    console.log(req.body)


        if (updatePost.matchedCount === 0) {
            return res.status(404).json({ message: 'Post not found for update' });  // Handle not found
        }

        res.status(200).json({ message: 'Post updated successfully' });  // Send success message
    } catch (err) {
        res.status(500).json({ message: err.message });  // Handle server errors
    }
});




// DELETE (Delete specific data by ID - D from CRUD)
router.delete('/:postId', async (req, res) => {
   try {
       const deletePostById = await Post.deleteOne({ _id: req.params.postId });  // Find and delete post by ID

       if (deletePostById.deletedCount === 0) {
           return res.status(404).json({ message: 'Post not found for deletion' });  // Handle not found
       }

       res.status(200).json({ message: 'Post deleted successfully' });  // Send success message
   } catch (err) {
       res.status(500).json({ message: err.message });  // Handle server errors
   }
});


module.exports = router;
