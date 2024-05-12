const express=require("express");
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
const gameList = require("./utils");
app.get('/home',(request,response)=>{
    response.render('index')
})
app.get('/next',(request,response)=>{

    response.render('next');
})
app.get("/:name", (req, res) =>{
    const gameName = req.params.name;

    
    res.render("onegame", {
     
        gamelist: gameList,
        gameName:gameName

    });
});

app.get("/", function(req, res){
    res.render("gamelist", {
        gamelist: gameList
    });
});


app.get(";*",(req, res) => {
    res.send("You Are Lost")
});
module.exports = app;