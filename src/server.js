import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import database from '../config/db.js'

// all routes
import routerHome from './routes/home.js'
import routerLogin from './routes/log-in.js'
import routerSignUp from './routes/sign-up.js'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())

dotenv.config()

// Routes
app.get('/', routerHome)

app.post('/sign-up', routerSignUp)
app.post('/log-in', routerLogin)


// Listening PORT
app.listen(3000, () => {
    console.log(`server running at 3000`)
})

database.initDB()