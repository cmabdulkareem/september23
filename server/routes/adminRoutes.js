import express from 'express'
import { 
    handlesendOtp, 
    handleRegister, 
    handleLogin, 
    handleCheckAuth, 
    handleSignout,
    handleAddProducts } from '../controller/adminController.js'

const router = express.Router()

router.post("/sendotp", handlesendOtp)
router.post("/register", handleRegister)
router.post("/login", handleLogin)
router.get("/checkauth", handleCheckAuth)
router.get("/signout", handleSignout)

router.post("/addproducts", handleAddProducts)

export default router