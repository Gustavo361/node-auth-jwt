import express from 'express'

import {authenticateToken} from './auth-controller.js'

const router = express.Router()

router.get('/', authenticateToken, (req, res) => {
    res.send('backend here router')
})

export default router