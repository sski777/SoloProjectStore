import dotenv from 'dotenv'
import express from 'express'
import pool from '../db.js'
import { checkJwt } from '../auth.js';


dotenv.config();


const route = express.Router()


route.use(express.json())




route.get('/', async (req, res) => {
  const gettable = await pool.query('SELECT * FROM cartitems')
  res.status(200).json(gettable.rows)
})



export default route