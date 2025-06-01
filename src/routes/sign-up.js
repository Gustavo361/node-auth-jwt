import express from 'express'
import { createUser } from '../model/user-model.js'

const router = express.Router()

router.post('/sign-up', async (req, res) => {
    console.log(req.body)
    try {
        const { nickname, email, password } = req.body
        let user = await createUser(nickname, email, password)
        console.log('user created successfully!')
        res.status(200).json(user)
    } catch (err) {
        console.error(err)
        console.log('user creating failed')
        res.status(500).json({message: 'error signing up user'})
    }
})

export default router