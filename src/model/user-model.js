import database from '../../config/db.js'

export async function createUser(nickname, email, password) {
    let result = await database.query('INSERT INTO users (nickname, email, password) VALUES ($1, $2, $3) RETURNING *', [nickname, email, password])
    console.log(result.rows[0])
    return result.rows[0]
}