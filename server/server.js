const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./configrations/config');
const port = 5000;
const app = express();
// Set up Mongoose
const isDev = process.env.NODE_ENV !== 'production';
console.log("development "+ isDev);
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
})
);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);
app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
require('./routes')(app);
app.listen(port,function () {
    console.log("server started on port "+port);
});