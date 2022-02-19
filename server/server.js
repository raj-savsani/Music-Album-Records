const connect = require("./configs/db");

const app = require("./index");



app.listen(2345, async (req, res) => {
  await connect();
  console.log(`connected on 2345`);
});

module.exports = app;
