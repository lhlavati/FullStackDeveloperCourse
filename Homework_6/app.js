const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Server is running!");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    res.send(bmi);
})