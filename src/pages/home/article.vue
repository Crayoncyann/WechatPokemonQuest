<template>
    <div class="home">
        <p class="home-hint">* 注意：食谱并不是 100% 成功</p>
        <p class="home-hint">食谱列出的宝可梦是可以学习技能的形态</p>
        <section>
            <div class="title" @click="handleClick(1)">
                <span>大岩神教</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status1}">
                <span class="card-rec-info">一周目最适用宝可梦，技能为落石、变硬 3 插槽最佳</span>
                <br>
                <span class="card-rec-info">不要太追求宾果，2 周目想快速挂机就需要更换其他宝可梦</span>
                <br>
                <span class="card-rec-info">* 完美落石可继续培养</span>
                <template v-for="card in dayanshe">
                    <v-card :name="card.name" :src="card.src" :cook="card.cook" :ability="card.ability"></v-card>
                </template>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(2)">
                <span>吹捧尼多兰</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status2}">
                <span class="card-rec-info">专打不服的 boss</span>
                <br>
                <span class="card-rec-info">推荐能力槽 6 血，技能槽必须恒恒恒</span>
                <template v-for="card in niduolan">
                    <v-card :name="card.name" :src="card.src" :cook="card.cook" :ability="card.ability"></v-card>
                </template>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(3)">
                <span>防御 / BUFF 型</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status3}">
                <span class="card-rec-info">能力槽至少 5 血，技能槽推荐团团团</span>
                <br>
                <span class="card-rec-info">吸血达到 10% 后，主堆异常抗性</span>
                <br>
                <span class="card-rec-info">宾果以减技能 CD 为主，目前减少普攻 CD 我只知道超梦有</span>
                <template v-for="card in defs">
                    <v-card :name="card.name" :src="card.src" :cook="card.cook" :ability="card.ability"></v-card>
                </template>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(4)">
                <span>攻击型</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status4}">
                <span class="card-rec-info">能力槽至少 5 攻，技能槽推荐连展展、快展展，藤鞭输出要求比水炮要高</span>
                <br>
                <span class="card-rec-info">吸血达到 7% 后，主堆暴击</span>
                <br>
                <span class="card-rec-info">宾果以当前技能系加攻、减少 CD 为主，</span>
                <template v-for="card in atts">
                    <v-card :name="card.name" :src="card.src" :cook="card.cook" :ability="card.ability"></v-card>
                </template>
            </div>
        </section>
    </div>
</template>

<script>
import vCard from '../../components/card'

import pokemons from '../../js/pokemon'

export default {
    name: 'v-article',
    components: {
        vCard,
    },
    data() {
        return {
            // status: [true, false, false] 行不通...
            status1: false,
            status2: false,
            status3: false,
            status4: false,
            active: '',
            atts: [pokemons[0], pokemons[68], pokemons[113], pokemons[54], pokemons[116], pokemons[120],],
            defs: [pokemons[61], pokemons[64], pokemons[65], pokemons[72], pokemons[79], pokemons[88], pokemons[90],],
            dayanshe: [pokemons[94]],
            niduolan: [pokemons[28]],
        }
    },
    methods: {
        handleClick(index) {
            if (this.active != `status${index}`) {
                this[this.active] = false
            }
            this.active = `status${index}`
            this[`status${index}`] = !this[`status${index}`]
        },
    }
}
</script>

<style scoped>
    .home {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .home section {
        position: relative;
        text-align: left;
        margin: 20px 20px 0;
        padding: 10px;
        border: 2px solid #fff;
        border-radius: 5px;
    }

    .home section .title {
        position: relative;
        font-size: 16px;
        padding: 10px 0;
    }

    .home section img {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        right: 0;
    }

    .home section .card-rec-info {
        font-size: 15px;
        color: #00566B;
    }

    .home section .content {
        position: relative;
        max-height: 0;
        opacity: 0;
        transition: opacity 0.5s, max-height 0.6s;
        overflow: hidden;
    }

    .content-hover {
        max-height: 1500px !important;
        opacity: 1 !important;
    }

    .home-hint {
        font-size: 14px !important;
        color: #00566B;
        line-height: 20px !important;
    }
</style>
