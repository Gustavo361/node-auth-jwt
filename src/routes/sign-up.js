import express from 'express'
import { createUser } from '../model/user-model.js'

import { authorzationSignUp } from '../routes/auth-controller.js'

const router = express.Router()

router.post('/sign-up', async (req, res) => {
    try {
        const { nickname, email, password } = req.body
        let user = await createUser(nickname, email, password)

        if (user) {
            let token = authorzationSignUp(user)
            console.log('user created successfully!')
            res.status(200).json({
                redirect: '/',
                token: token
            })
        }

    } catch (err) {
        console.error(err)
        console.log('user creating failed')
        res.status(500).json({ message: 'error signing up user' })
    }
})

export default router