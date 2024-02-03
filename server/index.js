const express = require('express')
const cors = require("cors");
const app = express();
// CORS Defination
app.use(cors());
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.static('uploads'));
const Membermodel = require('./member-model')
const https = require('https');
const fs = require('fs');
app.use(express.json())
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("Connected to the DataBase"))
    .catch((err) => console.log("Can not Connect"))

// Member 
app.all('/post', async (req, res) => {
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



// Image Upload and Retrive Functions..............................................

require("./imageDetails");
const Images = mongoose.model("ImageDetails")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
})

const upload = multer({ storage: storage })
app.post("/upload-image", upload.array("image", 20), async (req, res) => {
    const imageArray = req.files
    try {
        for (let index = 0; index < imageArray.length; index++) {
            await Images.create({ image: imageArray[index].filename });
        }
        res.send("Photos Uploaded: " + imageArray.length)

    } catch (error) {
        res.send("Do not enter more than 20 Images!!")
    }
})

app.get('/get-image', async (req, res) => {
    try {
        Images.find({}).then((data) => {
            res.send({ status: "Ok", data: data });
        })
    } catch (error) {
        res.json({ status: error })

    }
})
// ......................................................................

app.get("/", (req, res) => {
    res.send("Backend is Online.")
})

//----
// https.createServer({
//     cert: fs.readFileSync('./localhost.crt'),
//     key: fs.readFileSync('./localhost.key'),
// }).listen(4001);


app.listen(4001, (req, res) => {
    console.log(`Server is running on 4001`)
})
