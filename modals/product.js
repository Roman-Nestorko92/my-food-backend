const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const typeList = ["meat", "vegetables", "milk products"];
const releaseDateRedex = /^\d{4}$/;

const productSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: typeList,
    },
    releaseDate: {
      type: Number,
      match: releaseDateRedex,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  price: Joi.number().required(),
  name: Joi.string().required(),
  avatar: Joi.string().required(),
  favorite: Joi.boolean(),
  type: Joi.string().valid(...typeList),
  releaseDate: Joi.string().pattern(releaseDateRedex),
});

const Product = model("product", productSchema);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {
  Product,
  schemas,
};
