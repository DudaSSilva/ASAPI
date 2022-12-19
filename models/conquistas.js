const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const ConquistasSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
},
  opts
);

ConquistasSchema.virtual("url").get(function() {
  return `/conquistas/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("conquistas", ConquistasSchema, "conquistas");