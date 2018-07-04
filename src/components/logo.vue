<template>
    <div class="login">
        <img class="title" src="/static/image/title.png" alt="title">
        <br>
        <img class="logo" src="/static/image/logo.gif" alt="logo">
    </div>
</template>

<script>
export default {
    name: 'v-logo',
}
</script>

<style scoped>
    .login {
        position: relative;
        text-align: center;
        padding: 15px 0;
        background: #fff;
    }

    .login .title {
        height: 25px;
        width: 200px;
    }

    .login .logo {
        height: 200rpx;
        width: 380rpx;
    }
</style>
