import {Router} from "express";
import { SignUp ,Login,UploadPost,getData,sendDataById} from "../controllers/user.controller.js";


const router=Router();

router.route("/signup").post(SignUp)
router.route("/login").post(Login)
router.route("/uploadpost").post(UploadPost);
router.route("/getdata").get(getData);
router.route("/postdetails").post(sendDataById);



export {router}
