const Message= require("../models/message.model")

exports.get=async (req,res)=>{

    
        const { from_id, to_id } = req.message;
      
        try {
          const messages = await Message.find({
            $or: [
              { from_id: from_id, to_id: to_id },
              { from_id: to_id, to_id: from_id },
            ],
          });
      
        //   console.log(messages); // log the messages array to the console
      
          if (messages.length === 0) { // check if the messages array is empty
            console.log("No messages found for the specified criteria.");
            
          }else{
            
          }
      
          res.send(messages); // send just the messages array in the response
      
        } catch (err) {
          console.error(err);
          res.status(500).json({ msg: "Failed to fetch messages." });
        }
      };
      
      
      


exports.post = async (req, res) => {
    try {
      const messages = new Message({
          ...req.body
      });
  
      await messages.save();
  
      return res.json({ msg: "Message added successfully." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Failed to add message to the database.",err });
    }
  };
  
  

  exports.getgroupchat = async(req,res)=>{

  }

  exports.sendgroupchat = async(req,res)=>{

  }