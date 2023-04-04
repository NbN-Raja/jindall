module.exports=(app)=>{
var router = require("express").Router();
const multer = require('multer');
const path = require("path");
// const upload = multer({ dest: '../public/profile_pic' });
const usercontroller= require("../controller/usercontroller.js")



// multer Set Storage For Image Uploading 
const storage= multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,path.join(__dirname,'../public/profile_pic' ) )
        
    },
    filename:function(req,file,cb){
        const uniqueSuffix= Date.now()+ '-'+ file.originalname;
        cb(null,uniqueSuffix)
    }
})

const upload= multer({storage: storage})

router.get("/update",usercontroller.get)

router.put("/update/:id",usercontroller.updateuserdetails)

router.put("/delete/:id",usercontroller.usercandeletetheirdetail)

router.put("/restore/:id",usercontroller.usercanrestoretheirdetail)

router.put("/password/:id",usercontroller.userpasswordchange)

router.put("/avatar",upload.single('avatar'),usercontroller.profilepicturechange)


app.use("/api/users", router);
}