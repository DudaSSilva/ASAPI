const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const TarefasSchema = new Schema({
  nomeLista: { type: String, required: true },
  tarefa1: { type: String, required: true },
  tarefa2: { type: String, required: true },
  tarefa3: { type: String, required: true },
  tarefa4: { type: String, required: true },
  tarefa5: { type: String, required: true },
  value: { type: Boolean, required: true },
},
  opts
);

TarefasSchema.virtual("url").get(function() {
  return `/tarefas/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("tarefas", TarefasSchema, "tarefas");