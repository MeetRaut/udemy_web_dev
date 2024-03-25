import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
    
})

app.get("/about", (req, res) => {
    res.send("This is about!");
    
})

app.listen(3000, () => {
    console.log(`Server running on port ${port}.`);
})