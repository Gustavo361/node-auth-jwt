import PostForm from '../../client/src/components/PostForm.vue'
import database from '../../config/db.js'

export async function createUser(nickname, email, password) {
    let dataResponse = await database.query('INSERT INTO users (nickname, email, password) VALUES ($1, $2, $3) RETURNING *', [nickname, email, password])
    console.log(dataResponse.rows[0])
    return dataResponse.rows[0]
}

export async function loginUser(nickname, password) {
    try {
        let dataResponse = await database.query('SELECT * FROM users WHERE nickname = $1 AND password = $2;', [nickname, password])
        let user = dataResponse.rows[0]
        return user || null
    } catch (err) {
        console.error(err)
        return null
    }
}



// fazer a query pra inserir?
// mostrar o resultado
