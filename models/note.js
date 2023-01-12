module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define(
    "notes",
    {
      note: {
        type: Sequelize.TEXT,
      },
    },
    { freezeTableName: true }
  );

  return Note;
};
