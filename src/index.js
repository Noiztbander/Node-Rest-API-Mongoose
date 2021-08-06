const app = require("./server");
const { config } = require("./config/");
const connect = require("./db/connect");

// console.log(config.app.ATLAS_PORT);
const PORT = 3001;

connect().then(async function onServerInit() {
  // console.log(`connected to DB`);

  app.listen(PORT, () => {
    console.log(`Server Running on  port ${PORT}`);
  });
});

