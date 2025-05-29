<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="nickname">nickame:</label>
            <input type="text" id="nickname" v-model="nickname" required>
        </div>
        <div>
            <label for="email">email:</label>
            <input type="email" id="email" v-model="email" required>
        </div>
        <div>
            <label for="password">password:</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            nickname: '',
            email: '',
            password: ''
        }
    },
    method: {
        handleSubmit() {

        }
    }
}
</script>