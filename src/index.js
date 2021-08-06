
const app = require("./server");
// const { config } = require("./config/");
// console.log(config);
// console.log(config.app);
// console.log(config.app.PORT);
// const connect = require("./db/connect");

// uncomment if you need to seed the database before
// const { seedMovies } = require("./db/seed");

// connect().then(async function onServerInit() {
//   config.logger.info(`DB connected`);

//   // uncomment if you need to seed the database before
//   // await seedMovies();

// });

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server Running on  port ${PORT}`);
	// config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
});