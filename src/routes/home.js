import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('backend here router')
})

export default router