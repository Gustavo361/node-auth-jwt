import express, { Router } from 'express'
import { loginUser } from '../model/user-model.js'
import { authorizationLogin } from '../routes/auth-controller.js'

const router = express.Router()

router.post('/log-in', async (req, res) => {
    try {
        const { nickname, password } = req.body

        let user = await loginUser(nickname, password)

        if (user) {
            const token = authorizationLogin(user)
            console.log('user logged in succesfully')
            res.status(200).json({
                message: 'user logged in succesfully',
                redirect: '/',
                token:token
            })
        } else {
            console.error('inválid credentials')
            res.status(401).json({ message: 'inválid credentials' })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'error logging in user' })
    }
})

export default router