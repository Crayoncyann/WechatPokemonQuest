<template>
    <div id="app">
        <span class="tips">完成度 2.3 / 4</span>
        <div class="content">
            <span>感谢</span>
            <p>UI：隋同学</p>
        </div>
        <div class="content">
            <span>小程序项目地址</span>
            <p>欢迎 fork</p>
            <p>https://github.com/Crayoncyann/WechatPokemonQuest.git</p>
        </div>
        <div class="content">
            <span>一个后台</span>
            <p>侵删 ( ゜- ゜)つロ</p>
            <p>方可梦查询系统</p>
            <p>http://www.oowen.cn/index.php</p>
        </div>
        <span class="tips">不知道小程序怎么跳转外部链接...懒得查了...</span>
        <br>
        <span class="tips">无聊吐槽小程序的 IDE</span>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    #app {
        font-size: 20px;
        color: #333333;
    }

    .tips {
        display: block;
        font-size: 14px;
        color: #00566B;
        text-align: center;
    }

    .content {
        margin: 20px;
    }

    .content span {
        display: inline-block;
        margin-bottom: 15px;
    }

    .content p {
        font-size: 15px;
        line-height: 30px;
        word-wrap: break-word;
    }
</style>
