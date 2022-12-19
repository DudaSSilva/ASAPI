const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const LivrosSchema = new Schema({
  livro: { type: String, required: true },
  sinopse: { type: String, required: true },
},
  opts
);

LivrosSchema.virtual("url").get(function() {
  return `/livros/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("livros", LivrosSchema, "livros");