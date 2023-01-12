const { encryptPassword } = require("../helpers/commonHelper");
const tbl = require("../models");
const Model = tbl.user;

exports.register = async (req, res) => {
  let { name, email, password } = req.body;

  const dataUser = {
    name: name,
    email: email,
    password: encryptPassword(password),
  };

  try {
    let check = await Model.findOne({
      where: {
        email: email,
      },
    });

    if (!check) {
      await Model.create(dataUser);
      return res.json({
        success: true,
        message: "Registrasi berhasil.",
      });
    } else {
      return res.json({
        success: false,
        message: "Email telah digunakan.",
      });
    }
  } catch (error) {
    res.status(505);
    console.log(error);
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;

  let user = await Model.findOne({
    where: {
      email: email,
      password: encryptPassword(password),
    }
  });

  if (user) {
    return res.json({
      success: true,
      message: "Berhasil login."
    })
  } else {
    return res.json({
      success: false,
      message: "Pastikan email dan password Anda benar.",
    })
  }
}

exports.post = async (req, res) => {
  let dataUser = {
    name: req.body.name,
  };

  try {
    Model.create(dataUser);
    return res.json({
      success: true,
      message: "Pengguna berhasil ditambahkan.",
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

exports.get = async (req, res) => {
  Model.findAll({ attributes: ["id", "name"] })
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
