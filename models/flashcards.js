const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const FlashcardsSchema = new Schema({
  URL: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
},
  opts
);

FlashcardsSchema.virtual("url").get(function() {
  return `/flashcards/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("flashcards", FlashcardsSchema, "flashcards");