<template>
    <div id="app">
        <span class="tips">纯 FE，没有架服务</span>
        <div class="content">
            <span>感谢</span>
            <p>UI、食谱：隋同学</p>
        </div>
        <div class="content">
            <span>小程序项目地址</span>
            <p>欢迎 fork</p>
            <p>https://github.com/Crayoncyann/WechatPokemonQuest.git</p>
        </div>
        <div class="content">
            <span>一个方可梦查询系统</span>
            <p>侵删 ( ゜- ゜)つロ</p>
            <p>做的相当全了，如果你要查东西就来这里</p>
            <p>Pokemon Quest Recipes</p>
            <p>https://pokequestrecipes.me</p>
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
        padding: 20px 0;
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
