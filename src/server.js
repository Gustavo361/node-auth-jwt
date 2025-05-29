import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import database from './db.js'

// all routes
import routerHome from './routes/home.js'
import routerLogin from './routes/login.js'
import routerSignUp from './routes/sign-up.js'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())

dotenv.config()

async function initDB() {
    try {
        await database.query('SELECT NOW()')
        console.log('database connected successfully!')
    } catch (err) {
        console.error('failed to connect to the database: ', err)
        process.exit(1)
    }
}

// Routes
app.get('/', routerHome)

app.post('/post', routerLogin)
app.post('/sign-up', routerSignUp)


// Listening PORT
app.listen(3000, () => {
    console.log(`server running at 3000`)
})

initDB()