const express = require("express");
const app = express();
const { PORT } = require("./config-env");
const morgan = require("morgan");
const routers = require("./database/routes/index.ts");
const mongo = require("./database");
const cors = require('cors')
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(routers);

app.listen(PORT, () => {
  console.log("El servidor subió");
});
