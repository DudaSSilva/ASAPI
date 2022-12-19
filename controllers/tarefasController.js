const ObjectId = require('mongoose').Types.ObjectId;
const Tarefa = require('../models/tarefas');

exports.list = async (req, res) => {
  await Tarefa.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarTarefas = async (req, res) => {
  await Tarefa.find({}).exec(function(err, docs) {
    res.render('viewtarefas', { tarefas: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const tarefaDocument = new Tarefa({
      nomeLista: req.body.nomeLista,
      tarefa1: req.body.tarefa1,
      tarefa2: req.body.tarefa2,
      tarefa3: req.body.tarefa3,
      tarefa4: req.body.tarefa4,
      tarefa5: req.body.tarefa5,
      value: req.body.value
    });
    tarefaDocument
      .save()
      .then(result => {
        res.redirect("/tarefaspage");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/tarefaspage');
  }

}

exports.update = async (req, res) => {
  if (req.method == "POST") {
    const filter = { _id: new ObjectId(req.params.tarefaId) };
    const update = {
      nomeLista: req.body.nomeLista
    };
    await Tarefa.findOneAndUpdate(filter, update).then(function(err, result) {
      console.log(err);
      console.log(req.body.nomeLista);
      msg = "Nome da lista atualizado com sucesso!";
      console.log(msg);
      res.msg = msg;
      exports.list(req, res);
    });
  } else {
    await Tarefa.findOne({ _id: new ObjectId(req.params.tarefaId) }).then(function(result) {
      res.render(`tarefas/update`, { doc: result });
    })
  }
}

exports.delete = async (req, res) => {
  await Tarefa.findOneAndDelete({ _id: new ObjectId(req.params.tarefaId) }).then(function(err, data) {
    res.redirect('/viewtarefas')
  });
}

