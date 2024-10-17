const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts',postsRoute)

/* Home Path Route */
app.get('/', (req, res) => {
    res.send('Ricki\'s Homepage');
});


app.listen(3000, ()=>{
    console.log('Server is up and running...')
})

