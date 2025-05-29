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
            const response = await axios.post('http://localhost:3000/sign-up', this.formData)
            console.log(response.data)
        }
    }
}
</script>