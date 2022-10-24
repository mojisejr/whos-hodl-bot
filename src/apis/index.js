const express = require("express");
const app = express();
const port = process.env.PORT | 3000;

app.listen(port, () =>
  console.log("APIS: API server conected on port: ", port)
);

module.exports = app;
