const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
const { readdirSync } = require("fs");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.setRoutes();
    this.handleError();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  setRoutes() {
    const routerDirectory = resolve(__dirname, "./routes");
    const files = readdirSync(routerDirectory, { enconding: "utf-8" });
    for (const file of files)
      this.app.use("/", require(`${routerDirectory}/${file}`));
  }
  handleError() {
    this.app.use((err, req, res, next) => {
      console.log(err);
      res
        .status(err.status || 500)
        .json(err.msg || err || "Internal server error")
        .end();
      next();
    });
  }
}

module.exports = App;
