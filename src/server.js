import express from 'express'

// all routes
import routerHome from './routes/home.js'
import routerLogin from './routes/login.js'
import routerSignUp from './routes/signup.js'

const app = express()


// Routes
app.get('/', routerHome)

app.post('/post', routerLogin)
app.post('sign-up', routerSignUp)


// Listening PORT
app.listen(3000, () => {
    console.log(`server running at 3000`)
})