<template>
    <div class="cook">
        <p class="home-hint">煮需要的宝可梦请看推荐页，食谱仅做任务用</p>
        <ul>
            <li v-for="(item, i) in cooks" :key="i" :class="{'margin-bottom': i == cooks.length - 1}">
                <div class="title">
                    <span>{{ item.id + '. ' }}</span>
                    <span>{{ item.name }}</span>
                </div>
                <div class="content">
                    <img :src="item.src" alt="">
                    <div class="info">
                        <span>{{ item.infos.pokemon }}</span>
                        <br>
                        <span v-for="(info, j) in item.infos.info">{{ info + ' ' }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import cooks from '../../js/cook'

export default {
    name: 'v-cook',
    data() {
        return {
            cooks: cooks,
        }
    },
}
</script>

<style scoped>
    .cook {
        width: 100%;
    }

    .home-hint {
        font-size: 14px;
        color: #00566B;
        margin-bottom: 20px;
    }

    .cook li{
        width: 80%;
        margin: 0 10% 20px;
        text-align: left;
    }

    .margin-bottom {
        margin-bottom: 0 !important;
    }

    .cook .title {
        width: 55%;
        padding: 5px 10px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 2px solid #008AAC;
        border-bottom: none;
        font-size: 15px;
    }

    .cook .content {
        position: relative;
        height: 100px;
        background: #fff;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 2px solid #008AAC;
        box-shadow: 5px 5px 10px #888888;
    }

    .content img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        left: 20px;
        width: 62px;
        height: 52px;
    }

    .content .info {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        left: 100px;
    }

    .content .info span {
        line-height: 30px;
        font-size: 15px;
    }
</style>
