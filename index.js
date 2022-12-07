const express = require("express");
const restRouter = require("express-rest-routerss");

const app = express();

app.use(restRouter({ routeDir: "/routes" }));

const port = 8000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
