<template>
    <div class="all">
        <p class="home-hint">数据来自百度百科</p>
        <ul>
            <li v-for="(item, index) in pokemons" :key="index">
                <p class="all-title">{{ item.id }}</p>
                <div class="all-info">
                    <img :src="item.src" alt="">
                    <p>{{ item.name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import pokemons from '../../js/pokemon'

export default {
    name: 'v-all',
    data() {
        return {
            pokemons: pokemons,
        }
    },
}
</script>

<style scoped>
    .all {
        padding: 0 20px;
    }

    .home-hint {
        font-size: 14px;
        color: #00566B;
        margin-bottom: 20px;
    }

    .all ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
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
