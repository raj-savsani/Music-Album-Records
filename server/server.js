const connect = require("./configs/db");

const app = require("./index");
const PORT = 2345;
app.listen(PORT, async () => {
  await connect();
  console.log(`connected on ${PORT}`);
});

module.exports = app;
