const cooks = []

const cookName = ['方可乐大杂烩', '方可乐红炖汤', '方可乐蓝苏打', '方可乐黄咖喱', '方可乐白焗菜', '方可乐清蒸锅', '方可乐丝滑可乐饼', '方可乐黏豆汤', '方可乐大地蛤汤', '方可乐健康清汁', '方可乐蜂蜜锅', '方可乐念椒肉丝', '方可乐顽石煮', '方可乐旋风焗烤', '方可乐焰辣汤', '方可乐麻麻烩饭', '方可乐壮壮欧蕾', '方可乐传奇汤']

// 食材
const cookList = {
    '小红': '/static/image/material/smallr.png',
    '小蓝': '/static/image/material/smallb.png',
    '小黄': '/static/image/material/smally.png',
    '小灰': '/static/image/material/smallg.png',
    '大红': '/static/image/material/bigr.png',
    '大蓝': '/static/image/material/bigb.png',
    '大黄': '/static/image/material/bigy.png',
    '大灰': '/static/image/material/bigg.png',
    '彩色': '/static/image/material/color.png',
    '海螺': '/static/image/material/conch.png',
}

const cook = (list) => {
    let r = []
    for (var i = 0; i < list.length; i++) {
        let l = list[i]
        r.push(cookList[l])
    }
    return r
}

const cookInfo = [
    {
        pokemon: '随机宝可梦',
        info: ['想放什么就放什么']
    },
    {
        pokemon: '红色宝可梦',
        info: cook(['小红', '小红', '小红', '小红', '小红',])
    },
    {
        pokemon: '蓝色宝可梦',
        info: cook(['小蓝', '小蓝', '小蓝', '小蓝', '小蓝',])
    },
    {
        pokemon: '黄色宝可梦',
        info: cook(['小黄', '小黄', '小黄', '小黄', '小黄',])
    },
    {
        pokemon: '灰色宝可梦',
        info: cook(['小灰', '小灰', '小灰', '小灰', '小灰',])
    },
    {
        pokemon: '水系宝可梦',
        info: cook(['小红', '小红', '小蓝', '小蓝', '小蓝',])
    },
    {
        pokemon: '一般系宝可梦',
        info: cook(['小蓝', '小蓝', '小蓝', '小灰', '小灰',])
    },
    {
        pokemon: '毒系宝可梦',
        info: cook(['小红', '小红', '小红', '小黄', '大灰',])
    },
    {
        pokemon: '地面系宝可梦',
        info: cook(['小红', '小红', '小红', '小灰', '小灰',])
    },
    {
        pokemon: '草系宝可梦',
        info: cook(['小红', '小黄', '小黄', '小黄', '大红',])
    },
    {
        pokemon: '虫系宝可梦',
        info: cook(['小蓝', '小蓝', '小黄', '大黄', '大黄',])
    },
    {
        pokemon: '超能系宝可梦',
        info: cook(['小蓝', '小蓝', '小蓝', '小黄', '小黄',])
    },
    {
        pokemon: '岩石系宝可梦',
        info: cook(['小黄', '小黄', '小灰', '小灰', '小灰',])
    },
    {
        pokemon: '飞行系宝可梦',
        info: cook(['小灰', '小灰', '小灰', '大红', '大红',])
    },
    {
        pokemon: '火系宝可梦',
        info: cook(['小红', '小红', '小红', '小蓝', '小蓝',])
    },
    {
        pokemon: '电系宝可梦',
        info: cook(['小红', '小红', '小黄', '大黄', '大黄',])
    },
    {
        pokemon: '格斗系宝可梦',
        info: cook(['小红', '小红', '小蓝', '小蓝', '大黄',])
    },
    {
        pokemon: '珍奇宝可梦',
        info: cook(['小红', '小蓝', '小黄', '小灰', '海螺',])
    },
]

for (var i = 1; i <= 18; i++) {
    let template = {
        id: i,
        src: `/static/image/cook/${i}.png`,
        name: cookName[i - 1],
        infos: cookInfo[i - 1],
    }
    cooks.push(template)
}

export default cooks
