import express from "express";
//import { login, register } from "../controllers/auth.js";
import {updateUser,deleteUser,getUser,getUsers} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//router.post("/register", register)
//router.post("/login", login)
/*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
  res.send("hello user you are logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
  res.send("hello user you are logged in and you can delete your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
  res.send("hello admin you are logged in and you can delete all accounts")
})*/
router.put("/:id", verifyUser, updateUser)
router.delete("/:id",verifyUser,deleteUser)
router.get("/:id",verifyUser,getUser)
router.get("/",verifyAdmin,getUsers)

export default router