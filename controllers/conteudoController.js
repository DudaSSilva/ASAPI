const ObjectId = require('mongoose').Types.ObjectId;
const Conteudo = require('../models/conteudos');

exports.list = async (req, res) => {
  await Conteudo.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarConteudos = async (req, res) => {
  await Conteudo.find({}).exec(function(err, docs) {
    res.render('viewconteudos', { conteudos: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const conteudoDocument = new Conteudo({
      nomedisciplina: req.body.nomedisciplina,
      conteudo1: req.body.conteudo1,
      conteudo2: req.body.conteudo2,
      conteudo3: req.body.conteudo3,
      conteudo4: req.body.conteudo4,
      value: req.body.value
    });
     conteudoDocument
      .save()
      .then(result => {
        res.redirect("/portugues");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/portugues');
  }

}

exports.update = async (req, res) => {
  if (req.method == "POST") {
    const filter = { _id: new ObjectId(req.body.id) };
    console.log(filter);
    const update = {
      nomedisciplina: req.body.nomedisciplina
    };
    console.log(update);
    await Conteudo.findOneAndUpdate(filter, update).then(function(err, result) {
      msg = "Conteudo atualizado com sucesso!";
      res.msg = msg;
      exports.list(req, res);
    });
  } else {
    await Conteudo.findOne({ _id: new ObjectId(req.params.conteudoId) }).then(function(result) {
      //console.log(result);
      res.render(`conteudos/update`, { doc: result });
    })
  }
}

exports.delete = async (req, res) => {
  await Conteudo.findOneAndDelete({ _id: new ObjectId(req.params.conteudoId) }).then(function(err, data) {
    res.redirect('/viewconteudos')
  });
}