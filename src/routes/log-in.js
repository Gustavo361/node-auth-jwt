import express, { Router } from 'express'
const router = express.Router()

router.post('/log-in', (req, res) => {
    console.log(req.body)
})

export default router