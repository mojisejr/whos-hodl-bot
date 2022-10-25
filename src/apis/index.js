const express = require("express");
const port = process.env.PORT | 3000;
const cors = require("cors");
const router = require("./routers/v1");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());
app.use(router);

app.listen(port, () =>
  console.log("APIS: API server conected on port: ", port)
);

module.exports = app;
