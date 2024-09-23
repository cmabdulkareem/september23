import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import {corsOptions} from './config/corsConfig.js'
configDotenv()
import './config/db.js'
import adminRouter from './routes/adminRoutes.js';

const app = express()
const PORT = process.env.PORT
app.use(cors(corsOptions))
app.use(express.json())


app.use("/admin", adminRouter)


app.listen(PORT, ()=>{
    console.log(`connected to http://localhost:${PORT}`);
})