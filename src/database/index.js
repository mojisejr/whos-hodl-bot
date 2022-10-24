const database = require("./database");

database
  .sync()
  .then(() => console.log("SQLITE: Database Connected Successfully"))
  .catch((e) => console.log(e));
