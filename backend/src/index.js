const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/", async (req, res) => {
  const data = await fetch(
    `https://www.meteosource.com/api/v1/free/point?place_id=${req.body.query}&sections=daily&key=${process.env.API_KEY}`,
  )
    .then((response) => {
      console.log(response.status);
      if (response.status !== 200) {
        res.json({ error: "something went wrong" });
      }
      return response.json();
    })
    .then((d) => {
      return res.json(d);
    })
    .catch((d) => res.error(d));
});

app.listen(3000, () => {
  console.log("server running on: http://localhost:3000");
});
