import express from 'express'

// all routes
import routerHome from './routes/home.js'

const app = express()


// Routes
app.get('/', routerHome)


// Listening PORT
app.listen(3000, () => {
    console.log(`server running at 3000`)
})