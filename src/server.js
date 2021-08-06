
const express = require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
// const morgan = require("morgan");

// const { userRouter } = require("./routes");
// const { errorMiddleware } = require("./middlewares");
const app = express();
const path = require('path');
const router = express.Router();

// app.use(errorMiddleware);
// app.use(morgan("dev"));
app.use(helmet());
app.use(json());

// app.use("/account", accountRouter);
// app.use("/users", userRouter);

app.use(express.static(__dirname + '/../public'));

router.get("/", (request, response)=>{
	//__dirname : It will resolve to your project folder.
	response.sendFile(path.join(__dirname+'/../public/html/index.html'));
});

//add the router
app.use('/', router);

module.exports = app;