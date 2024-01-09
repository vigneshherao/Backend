const express = require("express");

const app = express();


app.set("view engine","ejs");




app.listen(3000,()=>{
    console.log("port is started 3000");
})

app.use("/",(req,res)=>{
    let randomNumber = Math.floor(Math.random() * 10) +1;
    res.render("index",{newNumber:randomNumber});
})
