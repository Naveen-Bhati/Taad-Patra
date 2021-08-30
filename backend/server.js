const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const PORT = process.env.PORT || 5000;
const app = express();


dotenv.config()
connectDB();
app.use(express.json())


app.get('/', (req, res) => {
    res.send("API is Running")
});

app.get('/api/notes', (req, res) => {
    res.send(notes)

})

app.use("/api/users/", userRoutes);



app.listen(PORT, console.log(`server started on Port ${PORT}`));

