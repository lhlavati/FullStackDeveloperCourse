const bodyParser = require("body-parser");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Server is running!");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", async (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const meals = data.meals.slice(0, 3);
    res.send({ bmi, meals });
});
