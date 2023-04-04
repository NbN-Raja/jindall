const express = require("express");
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose= require("mongoose")


const app = express();
const port = 5000;

app.get('/', (req, res) => {
  // Get the value of the mycookie cookie
  res.send('Ball Bhayo Mu g');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// Database Connection

const connection =mongoose.connect(`mongodb+srv://xetrinbn66:Y3vsCajF3saO2wNO
@cluster0.sha62xh.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

require("./app/routes/auth.routes")(app)
require("./app/routes/user.routes")(app)
require("./app/routes/message.routes.js")(app)







app.listen(port, () => console.log(`Example app listening on port ${port}!`));



