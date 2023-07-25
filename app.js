const express = require("express");
const bodyParser = require("body-parser")

let items = [];
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/", function (req, res){

    let today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }

    let day = today.toLocaleDateString("en-GB",options)
        res.render("list", {kindOfDay: day, listItems: items})

})

app.post("/", function (req, res){
    let input = req.body.input;
    items.push(input);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})