const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  from_id: { type: String, required: true },
  to_id: { type: String, required: true },
  message: { type: String, required: true },
  username: { type: String, default: "username"} ,// Default role is user

});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
