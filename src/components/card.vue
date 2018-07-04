<template>
    <div class="card">
        <div class="card-title">
            <img src="/static/image/titleBall.png" alt="">
            <span>{{ title }}</span>
        </div>
        <div class="card-info" v-if="infoSrc">
            <div>
                <img :src="infoSrc || ''">
                <span v-for="info in infoList">{{ info + ' ' }}</span>
            </div>
            <div v-if="ability" v-for="(item, i) in ability">
                <img :src="item.src">
                <span v-for="(l, j) in item.list">{{ l + ' ' }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-card',
    props: {
        title: String,
        infoSrc: String,
        infoList: Array,
        ability: Object,
    },
}
</script>

<style scoped>
    .card {
        position: relative;
        margin: 20px 5px;
        text-align: left;
    }

    .card-title {
        position: relative;
        background: #fff;
        width: 35%;
        font-size: 16px;
        padding: 0 10px 10px 10px;
        padding-bottom: 5px;
        border: 2px solid #008AAC;
        border-bottom: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-title img {
        position: relative;
        width: 22px;
        height: 22px;
        top: 5px;
        margin-right: 10px;
    }

    .card-info {
        position: relative;
        font-size: 15px;
        padding: 0 10px;
        background: #fff;
        border-radius: 5px;
        border-top-left-radius: 0;
        border: 2px solid #008AAC;
        box-shadow: 5px 5px 10px #888888;
    }

    .card-info div {
        margin: 10px 0;
    }

    .card-info img {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        margin-right: 10px;
    }

    .card-info span {
        position: relative;
        top: -13px;
    }
</style>
