const ObjectId = require('mongoose').Types.ObjectId;
const Habito = require('../models/habitos');

exports.list = async (req, res) => {
  await Habito.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarHabitos = async (req, res) => {
  await Habito.find({}).exec(function(err, docs) {
    res.render('viewhabitos', { habitos: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const habitosDocument = new Habito({
      URL: req.body.URL,
    });
    habitosDocument
      .save()
      .then(result => {
        res.redirect("/habitospage");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/habitospage');
  }

}

exports.update = async (req, res) => {
  if (req.method == "POST") {
    const filter = { _id: new ObjectId(req.body.id) };
    console.log(filter);
    const update = {
      URL: req.body.URL
    };
    console.log(update);
    await Habito.findOneAndUpdate(filter, update).then(function(err, result) {
      console.log(req.body.photo);
      msg = "Hábito atualizado com sucesso!";
      res.msg = msg;
      exports.list(req, res);
    });
  } else {
    await Habito.findOne({ _id: new ObjectId(req.params.habitosId) }).then(function(result) {
      //console.log(result);
      res.render(`habitos/update`, { doc: result });
    })
  }
}

exports.delete = async (req, res) => {
  await Habito.findOneAndDelete({ _id: new ObjectId(req.params.habitosId) }).then(function(err, data) {
    res.redirect('/viewhabitos')
  });
}

