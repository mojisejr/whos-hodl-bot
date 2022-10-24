const express = require("express");
const app = express();
const port = process.env.PORT | 3000;

app.post("/add-new-plan", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  res.status(200).json({
    result: "new plan added",
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    result: "ok",
  });
});

app.listen(port, () =>
  console.log("APIS: API server conected on port: ", port)
);

module.exports = app;
