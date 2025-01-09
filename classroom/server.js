const express = require("express");
const app = express();
const session = require("express-session")
const flash = require("connect-flash");

const sessionOptions = {
    secret: "mysupersecretstring", 
    resave: false,
    saveUninitialized: true }

app.use(session(sessionOptions))
app.use(flash());

app.get("/register", (req, res) => {
   let {name} = req.query;
   res.send(name);
})

app.listen(3000, () => {
    console.log("server is listening to 3000");
})