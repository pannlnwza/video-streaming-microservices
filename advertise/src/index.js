const express = require("express");
const path = require("path");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));

const ads = [
    {
        name: "Shopee",
        url: "https://shopee.co.th",
        image: "/images/shopee.png",
    },
    {
        name: "Lazada",
        url: "https://www.lazada.co.th",
        image: "/images/lazada.png",
    },
    {
        name: "Kaidee",
        url: "https://www.kaidee.com",
        image: "/images/kaidee.png",
    },
];

app.get("/ads", (req, res) => {
    res.json({ ads });
});

app.listen(PORT, () => {
    console.log("Microservice online.");
});
