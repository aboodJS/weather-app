const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/", async (req, res) => {
  /* TODO: make the function detect and return errors properly  */

  const data = await fetch(
    `https://www.meteosource.com/api/v1/free/point?place_id=${req.body.query}&sections=daily&key=${process.env.API_KEY}`,
  )
    .then((j) => {
      if (j.ok) {
        return j.json();
      } else {
        return { code: j.status, text: j.statusText };
      }
    })
    .then((d) => d);
  res.send(data);
});

app.listen(3000, () => {
  console.log("server running on: http://localhost:3000");
});
