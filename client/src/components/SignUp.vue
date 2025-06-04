<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="nickname">nickame:</label>
            <input type="text" id="nickname" v-model="formData.nickname" required>
        </div>
        <div>
            <label for="email">email:</label>
            <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
            <label for="password">password:</label>
            <input type="password" id="password" v-model="formData.password">
        </div>
        <button type="submit">submit</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                nickname: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://localhost:3000/sign-up', this.formData)
                let redirectPath = response.data.redirect

                let token = response.data.token

                if (token) {
                    localStorage.setItem('token', token)
                    console.log('token: ', token)
                }

                if (redirectPath) {
                    this.$router.push(redirectPath)
                }
            } catch (err) {
                console.error(err.response?.data?.message || err.message)
            }
        }
    }
}
</script>