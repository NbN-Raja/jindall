module.exports = (app)=>{

    const routes= require("express").Router()
    const messagecontroller= require("../controller/message.controller")

    routes.post("/getmsg",messagecontroller.get)
    routes.post("/postmsg",messagecontroller.post)
    routes.get("/getgroupchat",messagecontroller.getgroupchat)
    routes.post("/sendgroupchat",messagecontroller.sendgroupchat)

    app.use("/api/message",routes)
}