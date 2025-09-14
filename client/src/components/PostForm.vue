<template>
    <form @submit.prevent="submitPost" enctype="multipart/form-data">
        <div>
            <label for="text">Your thoughts</label>
            <input type="text" v-model="formData.text" id="text" required>
        </div>
        <div>
            <label for="filePost">image:</label>
            <input type="file" @change="handleFileChange" id="filePost" accept="image/*" required>
        </div>
        <button type="submit">send</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {


    data() {
        return {
            formData: {
                text: '',
                image: null
            }
        }
    },
    methods: {
        handleFileChange(event) {
            this.formData.image = event.target.files[0]
        },
        async submitPost() {
            const formData = new FormData()
            formData.append('text', this.formData.text)
            formData.append('image', this.formData.image)

            const token = localStorage.getItem('token')

            if (!token) {
                this.$router.push('/login')
                return
            }

            try {
                const response = await axios.post('http://localhost:3000/post', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    this.formData = {
                        text: '',
                        image: null
                    }
                }

            } catch (err) {
                console.error('error: ', err)
            }
        }

    }
}
</script>