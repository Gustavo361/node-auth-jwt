<template>

    <form @submit.prevent="handleSubmit">
        <div>
            <label for="">nickname:</label>
            <input type="text" id="nickname" v-model="formData.nickname">
        </div>
        <div>
            <label for="">password:</label>
            <input type="password" id="password" v-model="formData.password">
        </div>
        <button type="submit">login</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                nickname: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            const response = axios.post('http://localhost:3000/log-in', this.formData, {
                'headers': 'Content-Type: aplication/json'
            })
            console.log(response.data)
        }
    }
}

</script>