const express = require('express')
const cors = require("cors");
const app = express();
// CORS Defination
app.use(cors());
const mogoose = require('mongoose')
const dotenv = require('dotenv')
// const mongoose = require('mongoose');
const Membermodel = require('./member-model')



app.use(express.json())

dotenv.config();

mogoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("DB connection succesful!"))
    .catch((err) => console.log("Can not COnnect"))

// Member 
app.all('/post', async (req, res) => {
    console.log("inside all function")
    const id = await Membermodel.count();
    const data = new Membermodel({
        id: id ? id + 1 : 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        amount: req.body.amount
    })
    try {
        const ifexists = await Membermodel.find({ phone: data.phone }).count() > 0;
        if (ifexists === false) {
            data.save();
            res.send("Success")
        }
        else {
            res.send("Phone already in use! Try another Number")
        }

    }
    catch (err) {
        res.send(err)
    }
})

app.get('/fetch', async (req, res) => {
    try {
        const data = await Membermodel.find();
        res.send(data)
    }
    catch (err) {

    }
})


app.get('/get_stat', async (req, res) => {
    const totalmem = await Membermodel.count()
    res.json(totalmem)
})






app.get("/", (req, res) => {
    res.send("Backend is Online.")
})


app.listen(8000, () => {
    console.log("Backend server is running on 8000...")
});
