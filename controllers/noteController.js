const tbl = require("../models");
const Model = tbl.note;

exports.post = async (req, res) => {
  let dataNote = {
    note: req.query.note,
  };

  try {
    Model.create(dataNote);
    return res.json({
      success: true,
      message: "Data berhasil ditambahkan.",
      data: dataNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

exports.get = async (req, res) => {
  Model.findAll()
    .then((data) => {
      return res.json({
        success: true,
        data: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
};