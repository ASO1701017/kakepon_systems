<template>
    <div>
        <p>Top page</p>
    <p><router-link to="/signin">アカウントの新規作成</router-link></p>
    <router-link to="/login">ログイン</router-link>
    </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
    div{
        text-align: center;
        font-size: 30px;
    }
</style>