import express from 'express'
const router = express.Router()

router.post('/sign-up', (req, res) => {
    const {nickname, email, password} = req.body

    console.log(nickname, email, password)
    console.log(req.body)
})

export default router