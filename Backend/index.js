const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", function(req,res){
    res.json({
        ping: "pong"
    })
})

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})