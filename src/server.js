const App = require("./app");
const { app } = new App();

app
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  })
  .on("error", (err) => {
    console.log(err);
  });
