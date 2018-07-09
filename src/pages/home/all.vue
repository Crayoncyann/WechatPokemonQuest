<template>
    <div class="all">
        <p class="home-hint">数据来自百度百科</p>
        <ul v-show="status">
            <li v-for="(item, index) in pokemons" :key="index" @click="handleClick(index)">
                <p class="all-title">{{ item.id }}</p>
                <div class="all-info">
                    <img :src="item.src" alt="">
                    <p>{{ item.name }}</p>
                </div>
            </li>
        </ul>
        <div class="card-info" v-if="!status">
            <img src="/static/image/back.png" alt="" @click="back">
            <span>大部分宝可梦都是在 36 级进化到最高形态</span>
            <v-info :name="pokemons[number].name" :src="pokemons[number].src" :cook="pokemons[number].cook" :evolution="pokemons[number].evolution" :pokemons="pokemons" :success="pokemons[number].success"></v-info>
        </div>
    </div>
</template>

<script>
import pokemons from '../../js/pokemon'

import vInfo from '../../components/info'

export default {
    name: 'v-all',
    components: {
        vInfo,
    },
    data() {
        return {
            pokemons: pokemons,
            status: true,
            number: -1,
        }
    },
    methods: {
        handleClick(index) {
            this.status = !this.status
            this.number = index
        },
        back() {
            this.status = !this.status
        }
    },
}
</script>

<style scoped>
    .card-info {
        text-align: left;
    }

    .card-info span {
        font-size: 15px;
        color: #00566B;
        line-height: 30px;
    }

    .card-info img {
        position: relative;
        width: 22px;
        height: 22px;
        top: 10px;
        margin-right: 10px;
        padding: 5px;
    }

    .all {
        padding: 0 20px;
    }

    .home-hint {
        font-size: 14px;
        color: #00566B;
    }

    .all ul {
        list-style: none;
        margin: 0px;
        padding: 20px 0;
        width: auto;
        width: 100%;
    }

    .all li {
        float: left;
        position: relative;
        margin: 0 4.166% 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 25%;
    }

    .all li p {
        font-size: 14px;
        background: #fff;
    }

    .all-title {
        text-align: left;
        width: 28px;
        padding: 2px 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 2px solid #008AAC;
        border-bottom: none;
    }

    .all-info {
        background: #fff;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: 5px 5px 10px #888888;
        border: 2px solid #008AAC;
    }

    .all-info p {
        padding-bottom: 2px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .all-info img {
        width: 52px;
        height: 52px;
        margin-top: 10px;
    }
</style>
