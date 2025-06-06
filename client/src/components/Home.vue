<template>
    <div>
        <h1>Welcome</h1>
        <button @click="handleLogOut">log out</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        async handleLogOut() {
            try {
                const response = await axios.post('http://localhost:3000/log-out')
                localStorage.removeItem('token')
                this.$router.push(response.data.redirect)
            } catch (err) {
                console.error('error: ', err)
            }
        }
    }
}
</script>