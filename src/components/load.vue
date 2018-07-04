<template>
    <div class="load">
        <span>加载中...</span>
    </div>
</template>

<script>
export default {
    name: 'v-load',
}
</script>

<style scoped>
    .load {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }

    .load span {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        z-index: 100;
        color: #fff;
    }
</style>
