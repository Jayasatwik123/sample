import express from "express";
//import { login, register } from "../controllers/auth.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity,createHotel, deleteHotel, getHotel, getHotels, updateHotel, countByType, getHotelRooms} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/",verifyAdmin, createHotel)
router.put("/:id",verifyAdmin,updateHotel)
router.delete("/:id",verifyAdmin,deleteHotel)
router.get("/find/:id",getHotel)
router.get("/",getHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
router.get("/room/:id",getHotelRooms)
export default router