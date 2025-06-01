import pkg from 'pg'
import dotenv from 'dotenv'

const { Pool } = pkg
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

async function initDB() {
    try {
        await pool.query('SELECT NOW()')
        console.log('database connected successfully!')
    } catch (err) {
        console.error('failed to connect to the database: ', err)
        process.exit(1)
    }
}

export default {
    query: (...args) => pool.query(...args),
    initDB
}