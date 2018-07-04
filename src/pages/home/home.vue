<template>
    <div class="home">
        <!-- 攻略模板, 没有做组件插入, 因为不更新也不会变, 如果你要改东西就直接在这里写 -->
        <p class="home-hint">如果你是壕或者欧洲人的话 *(੭*ˊᵕˋ)੭*ଘ</p>
        <p class="home-hint">大佬请不要看这个...</p>
        <section>
            <div class="title" @click="handleClick(1)">
                <span>攻略篇</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status1}">
                <p>1. 一周目的时候不要盲目追求宝可梦的宾果，就用最差的锅煮，简单通关就用大岩蛇神教（因为大岩蛇没有进化形态，无论等级，特技训练成功率高），一直推到 8 关 boss（尼多夫妇）</p>
                <p>2. 此时你应该有 1T 2DPS 的配置（如 1 变硬 2 落石 的大岩蛇），入手银锅后就可以开始煮水炮、藤鞭之类的宝可梦（特别提醒：喇叭芽就可以刷到藤鞭，如果宾果草系 ATK 加成高，可以选择不进化，以宾果出现变化）</p>
                <p>3. 在小蓝、小红素材比较多的时候，可以去通关一周目，拿到金锅（超梦没有你想象的难打）</p>
                <p>4. 在能稳定挂机 12-5 以后的关卡前，还是推荐挂机尼多夫妇，快快刷到一个好的 DPS</p>
                <p>5. 这之后还用看攻略么 (っ*´Д`)っ</p>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(2)">
                <span>家具篇</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status2}">
                <p class="home-hint">一切看你自己的喜好</p>
                <p>遵循省吃俭用的规则，按自己需要入手家具，下面只是列出来比较有用的，并不是全部</p>
                <p>1. 材料家具</p>
                <p>水伊布靠垫 - 蓝素材 * 1.5</p>
                <p>火伊布靠垫 - 红素材 * 1.5</p>
                <p>雷伊布靠垫 - 黄素材 * 1.5</p>
                <p>水箭龟喷泉 - 蓝素材 * 2</p>
                <p>喷火龙火炬 - 红素材 * 2</p>
                <p>2. 其他家具</p>
                <p>小火龙旗 - 特训成功率 * 1.5</p>
                <p>百变怪气球 - 特训成功率 * 2</p>
                <p>大食花高尔夫球袋 - 2 个技能槽概率 * 1.5</p>
                <p>袋龙吊床 - 2 个技能槽概率 * 2</p>
                <p>皮卡丘冲浪板 - 煮出多只概率 * 1.5</p>
                <p>超梦拱门 - 电池 + 1</p>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(3)">
                <span>宾果篇</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content" :class="{'content-hover': status3}">
                <p>1. 宾果只有 横、竖 连线才可点亮</p>
                <p>2. 宝可梦进化会有概率改变宾果能力</p>
                <p>3. 攻击型宝可梦，宾果最好是加属性攻击</p>
                <p>4. 防御型宝可梦，宾果最好是减少普攻 CD，减少技能 CD</p>
                <p>5. 如果你的宝可梦宾果就有一条不符合规则，恰好手里没有该类型的宝可梦，请培养他...</p>
                <p>6. 不要太刻意去追求宾果，细水长流...</p>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(4)">
                <span>P 坠子 / 力石篇</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content"  :class="{'content-hover': status4}">
                <p>1. 不要看攻、血的数值，前期尽量达标力石强度</p>
                <p>2. 攻击型宝可梦，力石强度达到 7% 吸血后，尽量堆高暴击伤害</p>
                <p>3. 防御型宝可梦，力石强度达到 10% 吸血后，尽量堆高异常抗性</p>
            </div>
        </section>
        <section>
            <div class="title" @click="handleClick(5)">
                <span>技能篇</span>
                <img src="/static/image/pull.png" alt="">
            </div>
            <div class="content"  :class="{'content-hover': status5}">
                <p class="home-hint">以下都以水炮为例</p>
                <p>1. 伤害技能推荐水炮、藤鞭，防御技能看个人喜好</p>
                <p>2. 部分宝可梦初始形态是洗不出技能的，需进化，如海星星需进化到宝石海星</p>
                <p>3. 洗技能最好使用相同宝可梦，同系宝可梦，增加成功率</p>
                <p>4. 如果成功率很低，那么你该换一只宝可梦培养了</p>
                <p>5. 龙星群并没有你想象的强力 (°ー°〃)</p>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'v-home',
    data() {
        return {
            // status: [true, false, false] 行不通...
            status1: false,
            status2: false,
            status3: false,
            status4: false,
            status5: false,
            active: '',
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

    .home section .content {
        position: relative;
        font-size: 14px;
        line-height: 30px;
        max-height: 0;
        opacity: 0;
        transition: opacity 0.5s, max-height 0.7s;
        overflow: hidden;
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

    .home-hint {
        font-size: 14px !important;
        color: #00566B;
        line-height: 20px !important;
    }

    .content-hover {
        max-height: 600px !important;
        opacity: 1 !important;
    }
</style>
