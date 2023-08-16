
const port =  5000;
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');

const db = require("./Database")
const BookModel = require("./BookModel/ModelSchema");
const bookRoute = require("./BookRoute/BookRoutes")

app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

app.use(bookRoute);

app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});