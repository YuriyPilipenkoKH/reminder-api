const { Schema, model } = require("mongoose");
const { handleMongooseError, emailRegexp } = require("../helpers");


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      match: emailRegexp,
      unique: true, // проверка на уникальность mongoose
      required: true,
    },

    password: {
      type: String,
      minlength: 6,
      required: true,
    },

  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
const UserModel = model("user", userSchema);

module.exports = UserModel