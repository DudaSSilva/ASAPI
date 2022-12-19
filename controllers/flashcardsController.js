const ObjectId = require('mongoose').Types.ObjectId;
const Flashcard = require('../models/flashcards');

exports.list = async (req, res) => {
  await Flashcard.find({}).exec(function(err, docs) {
    res.status(200).json(docs);
  });
}

exports.listarFlashcards = async (req, res) => {
  await Flashcard.find({}).exec(function(err, docs) {
    res.render('viewflashcards', { flashcards: docs, msg: res.msg });
  });
}

exports.show = (req, res) => {
  res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
  if (req.method == "POST") {
    const flashcardDocument = new Flashcard({
      URL: req.body.URL,
      title: req.body.title,
      text: req.body.text,
    });
    flashcardDocument
      .save()
      .then(result => {
        res.redirect("/flashcardspage");
        console.log("1")
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  } else {
    res.redirect('/flashcardspage');
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
    await Flashcard.findOneAndUpdate(filter, update).then(function(err, result) {
      console.log(req.body.URL);
      msg = "Flashcard atualizado com sucesso!";
      res.msg = msg;
      exports.list(req, res);
    });
  } else {
    await Flashcard.findOne({ _id: new ObjectId(req.params.flashcardId) }).then(function(result) {
      //console.log(result);
      res.render(`flashcards/update`, { doc: result });
    })
  }
}

exports.delete = async (req, res) => {
  await Flashcard.findOneAndDelete({ _id: new ObjectId(req.params.flashcardId) }).then(function(err, data) {
    res.redirect('/viewflashcards')
  });
}

