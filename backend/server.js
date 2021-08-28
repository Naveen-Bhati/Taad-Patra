const express = require('express')
const app = express();
const notes = require('./data/notes')
const env = require('dotenv')

app.get('/', (req, res) => {
    res.send("API is Running")
});

app.get('/api/notes', (req, res) => {
    res.send(notes)

})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note)

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on Port ${PORT}`));

