const app = require("./app");

app.listen(process.env.PORT || 4000, () => {
  console.log("Started express server at http://localhost:4000");
});