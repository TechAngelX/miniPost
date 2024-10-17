const express = require('express')
const app = express()

/* Home Path Route */
app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(3000, ()=>{
    console.log('Server is up and running...')
})