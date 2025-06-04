import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

function authorizationLogin(user) {
    try {
        const token = jwt.sign(
            { id: user.id, nickname: user.nickname },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        )
        return token
    } catch (err) {
        console.error('error: ', err)
        return null
    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

export {authorizationLogin, authenticateToken}