const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({'users': ['user1' , 'user2', 'user3']})
})

app.get('/time', (req, res) => {
    const date = new Date();

    res.json({'currentTime': date.getTime().toString()})
})

app.listen(5000, () => {console.log('Server started on port 5000')})