import express, { Router } from 'express'
const router = express.Router()

router.post('/login', (req, res) => {
    res.send('login page here')
})

export default router