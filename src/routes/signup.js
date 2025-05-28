import express from 'express'
const router = express.Router()

router.post('sign-up', (req, res) => {
    res.send('sign up here')
})

export default router