const dot = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser")
const storeSeed = require('./seeds/store');
const itemSeed = require('./seeds/items');
const orderSeed = require('./seeds/order');

dot.config({ path: path.resolve(__dirname, '.env')})

const app = express();

const router = express.Router();
global.router = router;

const setupRoutes = require('./routes');


const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sit0x.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongoose connection established')
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

setupRoutes(app);

// seeds the db

//storeSeed();
//itemSeed();
//orderSeed();

const port = process.env.Port || '8080'

app.listen(port, () => {
    console.log(`server running at port ${port}`);
    
})