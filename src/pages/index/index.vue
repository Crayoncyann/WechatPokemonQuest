<template>
    <div id="app">
        <v-logo></v-logo>
        <div class="tips">
            <a href="/pages/tips/main">tips</a>
        </div>
        <div class="main">
            <div class="menu">
                <template v-for="(title, index) in titles">
                    <span :class="{'title-active': title.active}" @click="handleClickTitle(index)">{{ title.t }}</span>
                </template>
            </div>
            <div class="content">
                <v-home v-if="titles[0].active"></v-home>
                <v-article v-if="titles[1].active"></v-article>
                <div v-if="titles[2].active">
                    <img src="/static/image/all.png" class="all">
                </div>
                <v-all v-if="titles[3].active"></v-all>
            </div>
        </div>
    </div>
</template>

<script>
import vLogo from '../../components/logo'
import vHome from '../home/home'
import vArticle from '../home/article'
import vAll from '../home/all'

import { log } from '../../utils'

export default {
    data() {
        return {
            titles: [
                {
                    t: '攻略',
                    active: true,
                },
                {
                    t: '推荐',
                    active: false,
                },
                {
                    t: '煮锅',
                    active: false,
                },
                {
                    t: '图鉴',
                    active: false,
                },
            ],
            // cards: pokemon,
        }
    },
    components: {
        vLogo,
        vHome,
        vArticle,
        vAll,
    },
    methods: {
        handleClickTitle(index) {
            for (var i = 0; i < this.titles.length; i++) {
                let title = this.titles[i]
                if (i != index) {
                    title.active = false
                } else {
                    title.active = true
                }
            }
        },
    },
    created() {

    }
}
</script>

<style scoped>
    #app {
        font-size: 16px;
        background: #fff;
    }

    .main {
        position: relative;
        width: 100%;
        text-align: center;
        top: 5px;
    }

    .menu {
        padding: 0;
    }

    .menu span {
        padding: 5px 25px 8px;
        border-top: 3px solid #FFCC00;
        border-right: 3px solid #FFCC00;
        background: #fff;
    }

    .menu :first-child {
        border-top-left-radius: 10px;
        border-left: 3px solid #FFCC00;
    }

    .menu :last-child {
        border-top-right-radius: 10px;
    }

    .menu .title-active {
        background: #FFCC00;
        color: #00566B;
    }

    .menu .title-active:hover {
        transition: 0.3s;
    }

    .content {
        position: relative;
        width: 100%;
        background: #FFCC00;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        top: 6px;
        padding: 20px 0;
    }

    .all {
        width: 100%;
        height: 750px;
    }

    .tips {
        position: absolute;
        top: 10%;
        right: 0;
        width: 40px;
        padding: 7px;
        background: #FFCC00;
        text-align: center;
        border: 2px solid #008AAC;
        border-right: none;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .tips a:hover {
        background: none;
    }
</style>
