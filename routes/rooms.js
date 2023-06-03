import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
//import { login, register } from "../controllers/auth.js";

const router = express.Router();
//router.post("/register", register)
//router.post("/login", login)
router.post("/:hotelid",verifyAdmin, createRoom)
router.put("/:id",verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoom)
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
router.get("/:id",getRoom)
router.get("/",getRooms)
export default router