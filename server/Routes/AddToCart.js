import express from 'express'
import dotenv from 'dotenv'
import pool from '../db.js'
import { checkJwt } from '../auth.js';

dotenv.config();



const route = express.Router()


route.use(express.json())


route.post('/', checkJwt, async (req, res) => {
  try{
    console.log('you have accesed the protected route!', req.auth.sub)
    const getuserid = req.auth.sub // new jwt auth technology by default populates the auth object with user info
    let getproductname = req.body.name
    const addentry = await pool.query('INSERT INTO cartitems (user_id,name) VALUES ($1,$2) RETURNING *',
    [getuserid,getproductname])
    res.status(201).send('Item Added To Cart!')
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
})




export default route