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


async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECTOR);
        console.log('DB is now connected!');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}
app.listen(3000, ()=>{
    console.log('Server is up and running...')
})

