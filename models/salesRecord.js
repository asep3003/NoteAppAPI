module.exports = (sequelize, Sequelize) => {
  const SalesRecord = sequelize.define(
    "sales_records",
    {
      user_id: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.TEXT,
      },
      nominal: {
        type: Sequelize.TEXT,
      },
      purchase_price: {
        type: Sequelize.TEXT,
      },
      sell_price: {
        type: Sequelize.TEXT,
      },
      pay_price: {
        type: Sequelize.TEXT,
      },
      is_pay: {
        type: Sequelize.TEXT,
      },
      payment_method: {
        type: Sequelize.TEXT,
      },
      margin: {
        type: Sequelize.TEXT,
      },
    },
    { freezeTableName: true }
  );

  return SalesRecord;
};
