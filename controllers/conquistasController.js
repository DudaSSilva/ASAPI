const ObjectId = require('mongoose').Types.ObjectId;
const Conquista = require('../models/conquistas');

exports.list = async (req, res) => {
  await Conquista.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarConquistas = async (req, res) => {
  await Conquista.find({}).exec(function(err, docs) {
    res.render('viewconquistas', { conquistas: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const conquistasDocument = new Conquista({
      title: req.body.title,
      text: req.body.text,
    });
    conquistasDocument
      .save()
      .then(result => {
        res.redirect("/conquistaspage");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/conquitaspage');
  }

}

exports.update = async (req, res) => {
  if (req.method == "POST") {
    const filter = { _id: new ObjectId(req.body.id) };
    console.log(filter);
    const update = {
      title: req.body.title
    };
    console.log(update);
    await Conquista.findOneAndUpdate(filter, update).then(function(err, result) {
      console.log(req.body.title);
      msg = "Conquistas atualizadas com sucesso!";
      res.msg = msg;
      exports.list(req, res);
    });
  } else {
    await Conquista.findOne({ _id: new ObjectId(req.params.conquistasId) }).then(function(result) {
      //console.log(result);
      res.render(`conquistas/update`, { doc: result });
    })
  }
}

exports.delete = async (req, res) => {
  await Conquista.findOneAndDelete({ _id: new ObjectId(req.params.conquistasId) }).then(function(err, data) {
    res.redirect('/viewconquistas')
  });
}

