<template>
    <div class="all">
        <ul>
            <li v-for="(item, index) in items" :key="index">
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
import pokemon from '../../js/pokemon'

export default {
    name: 'v-all',
    data() {
        return {
            items: [],
            names: pokemon
        }
    },
    created() {
        let url = '/static/image/pokemonAll/'
        for (var i = 1; i < 55; i++) {
            let obj = {
                id: i,
                name: this.names[i - 1],
                src: `${url}${i}.png`,
            }
            this.items.push(obj)
        }
    },
}
</script>

<style scoped>
    .all {
        padding: 0 20px 20px 20px;
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
        margin: 10px 1.5%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 22%;
    }

    .all li p {
        font-size: 14px;
        background: #fff;
    }

    .all-title {
        text-align: left;
        width: 28px;
        padding: 3px 5px 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .all-info {
        background: #fff;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: 5px 5px 10px #888888;
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
