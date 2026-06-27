const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/", async (req, res) => {
  try {
    const data = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${req.body.query}&sections=daily&key=${process.env.API_KEY}`,
    )
      .then((res) => res.json())
      .then((d) => d);
    res.json(data);
  } catch (error) {
    res.error(error);
  }
});

app.listen(3000, () => {
  console.log("server running on: http://localhost:3000");
});
