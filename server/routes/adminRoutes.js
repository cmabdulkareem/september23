import express from 'express'
import { handlesendOtp, handleRegister } from '../controller/adminController.js'

const router = express.Router()

router.post("/sendotp", handlesendOtp)
router.post("/register", handleRegister)


export default router