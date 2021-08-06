const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const newUserSchema = Schema(
  {
    username: String,
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      required: [true, "The password is required"],
    },
  },
  {
    // te crea una fecha ACTUAL en el momento de crear el usuario
    timestamps: true,
  },
);

const User = mongoose.model("user", newUserSchema);

module.exports = User;