<template>
    <div>
        <h1>Welcome</h1>
        <button @click="handleLogOut">log out</button>
        <PostForm />
        <AllPosts />
    </div>
    <div>
    </div>
</template>

<script>
import axios from 'axios'
import PostForm from './PostForm.vue'
import AllPosts from './AllPosts.vue'

export default {
    components: {PostForm, AllPosts},

    async mounted() {
        const token = localStorage.getItem('token')

        if (!token) {
            this.$router.push('/log-in')
            return
        }

        try {
            const res = await axios.get('http://localhost:3000/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (err) {
            console.error('error: ', err)
            this.$router.push('/log-in')
        }
    },
        
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