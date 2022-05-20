import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.get('/now', cors(corsOptions),(_req, res) => {
    res.json({"now": new Date().toLocaleString()})
})

export default app