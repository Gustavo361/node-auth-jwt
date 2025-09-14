import express, { Router } from 'express'
import multer from 'multer'

import {postUserImageText} from '../model/user-model.js'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/post', upload.single('image'), async (req, res) => {
    try {
        const text = req.body.text
        const image = req.file

        if (!text || !image) {
            return res.status(400).json({ error: 'Texto e imagem são obrigatórios' })
        }

        await postUserImageText(text, image.path)

        console.log('posts router')
        console.log(text, image)

        res.status(200).json({ message: 'created post!' })
    } catch (err) {
        console.error('error: ', err)
    }
})

export default router