const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')

const mongoose = require('mongoose')
require ('dotenv/config')


app.use(bodyParser.json())  
app.use('/posts',postsRoute)

/* Home Path Route */
app.get('/', (req, res) => {
    res.send('Ricki\'s Homepage');
});


mongoose.connect(process.env.DB_CONNECTOR)
    .then(() => {
        console.log('DB is now connected!');
    })
    .catch((err) => {
        console.error('DB connection error:', err);
    });

app.listen(3000, ()=>{
    console.log('Server is up and running...')
})

