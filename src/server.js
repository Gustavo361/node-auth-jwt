import express from 'express'

import database from './db.js'

// all routes
import routerHome from './routes/home.js'
import routerLogin from './routes/login.js'
import routerSignUp from './routes/signup.js'

const app = express()

async function initDB() {
    try {
        await database.query('SELECT NOW()')
        console.log('database connected successfully:')
    } catch (err) {
        console.error('failed to connect to the database.', err)
        process.exit()
    }
}

// Routes
app.get('/', routerHome)

app.post('/post', routerLogin)
app.post('sign-up', routerSignUp)


// Listening PORT
app.listen(3000, () => {
    console.log(`server running at 3000`)
})

initDB()