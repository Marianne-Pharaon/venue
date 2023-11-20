require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT;


require("./config/db");
const userRoute = require('./routes/userRoute');
const venueRoute = require('./routes/venueRoute');
const eventRoute = require('./routes/eventRoute');
const ReservationsRoute = require('./routes/ReservationsRoute');





app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/venue', venueRoute);
app.use('/event', eventRoute);
app.use('/reservation', ReservationsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});