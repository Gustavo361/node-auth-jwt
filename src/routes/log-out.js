import express, { Router } from 'express'

const router = express.Router()

router.post('/log-out', (req, res) => {
    try {
        res.status(200).json({
            redirect: '/log-in'
        })
    } catch (err) {
        console.error('error: ', err)
    }
})

export default router