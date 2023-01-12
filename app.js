const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const app = express();

app.use(bodyParser.json({ limit:'50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({})
});

require("./routes/user")(app)
require("./routes/note")(app)
require("./routes/salesRecord")(app)

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});