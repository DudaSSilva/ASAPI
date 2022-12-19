const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const HabitosSchema = new Schema({
  URL: { type: String, required: true },
},
  opts
);

HabitosSchema.virtual("url").get(function() {
  return `/habitos/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("habitos", HabitosSchema, "habitos");