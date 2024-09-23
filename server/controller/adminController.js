import { transporter } from "../config/nodemailer.js"
import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs'

let storedOtp = ''; 

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const handlesendOtp =  (req, res)=>{
    const {email} = req.body
    const otp = generateOTP()
    storedOtp = otp

    const mailOptions = {
        from: 'cmabdulkareem@gmail.com',
        to: email,
        subject: 'Approval request',
        text: `Your OTP code is: ${otp}`,
      };

      transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return res.status(500).json({error: "Internal error"})
        }else{
            res.status(200).json({message: "OTP sent succesfully"})
        }
      })
}

export const handleRegister = async (req, res) => {
    const { email, password, otp } = req.body;
  
    if (!email || !password || !otp) {
      return res.status(400).send('Missing required fields');
    }
  
    if (otp !== storedOtp) {    
      return res.status(400).send('Invalid OTP');
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await Admin.create({ email, password: hashedPassword });
  
      res.status(200).json({message: "registration success"});
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({error: "Registration failed, Internal error"});
    }
  };



