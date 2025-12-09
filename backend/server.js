import express from 'express'
const app = express()
const port = 3000
import routeIndex from './routes.js'
import connectDB from './config.js';
import cors from 'cors'


connectDB() 
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: false })); // No need for body-parser
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use(cors())
app.use('/',routeIndex)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))