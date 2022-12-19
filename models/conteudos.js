const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const ConteudosSchema = new Schema({
  nomedisciplina: { type: String, required: true },
  conteudo1: { type: String, required: true },
  conteudo2: { type: String, required: true },
  conteudo3: { type: String, required: true },
  conteudo4: { type: String, required: true },
  value: { type: Boolean, required: true },
},
  opts
);

ConteudosSchema.virtual("url").get(function() {
  return `/conteudos/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("conteudos", ConteudosSchema, "conteudos");