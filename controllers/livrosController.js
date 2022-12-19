const ObjectId = require('mongoose').Types.ObjectId;
const Livros = require('../models/livros');

exports.list = async (req, res) => {
  await Livros.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarLivros = async (req, res) => {
  await Livros.find({}).exec(function(err, docs) {
    res.render('viewlivros', { livros: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const livrosDocument = new Livros({
      livro: req.body.livro,
      sinopse: req.body.sinopse,
    });
    livrosDocument
      .save()
      .then(result => {
        res.redirect("/livrospage");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/livrospage');
  }

}

exports.delete = async (req, res) => {
  await Livros.findOneAndDelete({ _id: new ObjectId(req.params.livrosId) }).then(function(err, data) {
    res.redirect('/viewlivros')
  });
}

