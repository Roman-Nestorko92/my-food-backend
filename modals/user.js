const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const emailRedex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRedex,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 4,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const userRegistrSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRedex).required(),
  password: Joi.string().min(4).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRedex).required(),
  password: Joi.string().min(4).required(),
});

const schemas = {
  userRegistrSchema,
  userLoginSchema,
};

const User = model("user", userSchema);

module.exports = {
  schemas,
  User,
};
