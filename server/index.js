import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import rateLimiter from 'express-rate-limit'
import RouteAddEmail from './Routes/AddEmail.js'
import RouteAddToCart from './Routes/AddToCart.js'
import RouteCheckCart from './Routes/CheckCart.js'
const server = express()

server.use(helmet())

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
  });
  
  server.use(limiter); // add it as a middlewware function

server.use(cors({
    origin: 'http://localhost:5173', // Or whatever your frontend URL is
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

server.use('/addemail', RouteAddEmail)

server.use('/addtocart', RouteAddToCart)

server.use('/checkcart', RouteCheckCart)

server.listen(8080, () => {
  console.log('The Server Is Running!')
})