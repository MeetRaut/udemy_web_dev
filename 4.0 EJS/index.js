import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("August 17, 1975 23:15:30");
    const day = today.getDay();

    console.log(day); 

    let type;
    let adv;

    if (day === 0 || day === 6) {
        type = "a weekday";
        adv = "It's time to have fun";
    } else {
        type = "a weekday";
        adv = "It's time to work hard";
    }

    res.render("index.ejs",{
        dayType : type,
        advice : adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});