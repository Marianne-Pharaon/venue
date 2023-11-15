require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./config/db");
const ReservationsRoutes = require("./routes/ReservationsRoute");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", ReservationsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});