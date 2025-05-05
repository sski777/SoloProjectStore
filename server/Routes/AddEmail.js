import express from 'express'
import dotenv from 'dotenv'
import pool from '../db.js'


const route = express.Router()

dotenv.config();

route.use(express.json())



route.post('/', async (req, res) => {
   try{
    const getmessage = req.body.message
    const getname = req.body.name
    const getemail = req.body.email
    console.log(getemail)
    const addentry = await pool.query('INSERT INTO contact (name,email,text) VALUES ($1,$2,$3) RETURNING *',
    [getname,getemail,getmessage])
    res.status(201).send('Entry Has Been Added')
   }
   catch(error){
    res.status(400).json({error:error.message})
   }
})




export default route