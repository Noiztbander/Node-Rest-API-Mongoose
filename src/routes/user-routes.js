const Router = require("express").Router;
const path = require('path');

const { userController } = require("../controllers");
// const { authMiddleware } = require("../middlewares");
const userRouter = Router();

// userRouter.get("/", userController.getUsers);

// userRouter.get("/:id", (req, res) => {
//   res.sendFile(path.join(__dirname + "/../public/html/dashboard.html"));

//   res.status(200).send({
//     message: "Hello World",
//   });
// });

userRouter.post(
  "/",
  // (req, res) => {
  //   // res.status(200).send({
  //   //   message: "Post Done",
  //   // });
  //   // res.sendFile(path.join(__dirname + "/../../public/html/dashboard.html"));
  // },
  userController.register
);

// userRouter.patch("/", (req, res) => {
//   res.status(200).send({
//     message: "Hello World",
//   });
// });

// userRouter.delete("/:id", (req, res) => {
//   res.status(200).send({
//     message: "Hello World",
//   });
// });

module.exports = {
  userRouter: userRouter,
};
