const tbl = require("../models");
const Model = tbl.salesRecord;

exports.post = async (req, res) => {

  let margin = (req.body.sell_price - req.body.purchase_price);

  let data = {
    user_id: req.body.user_id,
    date: req.body.date,
    type: req.body.type,
    nominal: req.body.nominal,
    purchase_price: req.body. purchase_price,
    sell_price: req.body.sell_price,
    pay_price: req.body.pay_price,
    is_pay: req.body.is_pay,
    payment_method: req.body.payment_method,
    margin: margin,
  };

  try {
    Model.create(data);
    return res.json({
      success: true,
      message: "Data berhasil ditambahkan.",
      data: data,
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