const express = require("express");
const app = express();

const PORT = 8000;

const routes = require("./routes/index");

app.set("view engine", "pug");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running http://locahost:${PORT}`);
});
