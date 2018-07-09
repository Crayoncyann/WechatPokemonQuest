<template>
    <div class="info">
        <div class="info-title">
            <img src="/static/image/titleBall.png" alt="">
            <span>{{ name }}</span>
        </div>
        <div class="info-info" v-if="src">
            <div class="pokemons">
                <template v-if="evolution.length != 0" v-for="item in evolution">
                    <img :src="pokemons[item - 1].src">
                    <img class="img-right" src="/static/image/right.png" alt="">
                </template>
                <img :src="src">
            </div>
            <div class="pan">
                <img src="/static/image/pan.png" alt="">
                <span>{{ success + '%' }}</span>
                <div class="material">
                    <img v-for="info in cook" :src="info" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-info',
    props: {
        name: String,
        src: String,
        cook: Array,
        evolution: Array,
        pokemons: Array,
        success: String,
    },
}
</script>

<style scoped>
    .info {
        position: relative;
        text-align: left;
        margin-top: 20px;
    }

    .info-title {
        position: relative;
        background: #fff;
        width: 42%;
        border: 2px solid #008AAC;
        border-bottom: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 8px 0;
    }

    .info-title span {
        font-size: 16px;
        margin-left: 46px;
    }

    .info-title img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        width: 26px;
        height: 26px;
        margin: 0 10px;
    }

    .info-info {
        position: relative;
        background: #fff;
        border-radius: 5px;
        border-top-left-radius: 0;
        border: 2px solid #008AAC;
        box-shadow: 5px 5px 10px #888888;
    }

    .info-info .pokemons, .info-info .pan {
        position: relative;
        margin: 20px 15px;
    }

    .info-info .pokemons img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 15px;
    }

    .pokemons .img-right {
        position: relative;
        width: 26px !important;
        height: 26px !important;
        top: -10px;
    }

    .info-info .pan img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 15px;
    }

    .pan .material {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }

    .pan .material img {
        margin: 0 5px;
        width: 36px;
        height: 36px;
        border-radius: 5px;
    }

    .pan span {
        display: block;
        position: absolute;
        top: -50%;
        left: 1.5%;
        color: #00566B;
    }

</style>
