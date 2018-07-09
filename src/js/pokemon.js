const log = console.log.bind(console)

/*
*   @字母顺序及为50个宝可梦的分界线
*   @百度百科抓取的名字
*/
const a = ["妙蛙种子", "妙蛙草", "妙蛙花", "小火龙", "火恐龙", "喷火龙", "杰尼龟", "卡咪龟", "水箭龟", "绿毛虫", "铁甲蛹", "巴大蝶", "独角虫", "铁壳蛹", "大针蜂", "波波", "比比鸟", "大比鸟", "小拉达", "拉达", "烈雀", "大嘴雀", "阿柏蛇", "阿柏怪", "皮卡丘", "雷丘", "穿山鼠", "穿山王", "尼多兰", "尼多娜", "尼多后", "尼多朗", "尼多力诺", "尼多王", "皮皮", "皮可西", "六尾", "九尾", "胖丁", "胖可丁", "超音蝠", "大嘴蝠", "走路草", "臭臭花", "霸王花", "派拉斯", "派拉斯特", "毛球", "摩鲁蛾", "地鼠"]

const b = ["三地鼠", "喵喵", "猫老大", "可达鸭", "哥达鸭", "猴怪", "火暴猴", "卡蒂狗", "风速狗", "蚊香蝌蚪", "蚊香君", "蚊香泳士", "凯西", "勇基拉", "胡地", "腕力", "豪力", "怪力", "喇叭芽", "口呆花", "大食花", "玛瑙水母", "毒刺水母", "小拳石", "隆隆石", "隆隆岩", "小火马", "烈焰马", "呆呆兽", "呆壳兽", "小磁怪", "三合一磁怪", "大葱鸭", "嘟嘟", "嘟嘟利", "小海狮", "白海狮", "臭泥", "臭臭泥", "大舌贝", "刺甲贝", "鬼斯", "鬼斯通", "耿鬼", "大岩蛇", "催眠貘", "引梦貘人", "大钳蟹", "巨钳蟹", "霹雳电球"]

const c = ["顽皮雷弹", "蛋蛋", "椰蛋树", "卡拉卡拉", "嘎啦嘎啦", "飞腿郎", "快拳郎", "大舌头", "瓦斯弹", "双弹瓦斯", "独角犀牛", "钻角犀兽", "吉利蛋", "蔓藤怪", "袋兽", "墨海马", "海刺龙", "角金鱼", "金鱼王", "海星星", "宝石海星", "魔墙人偶", "飞天螳螂", "迷唇姐", "电击兽", "鸭嘴火兽", "凯罗斯", "肯泰罗", "鲤鱼王", "暴鲤龙", "拉普拉斯", "百变怪", "伊布", "水伊布", "雷伊布", "火伊布", "多边兽", "菊石兽", "多刺菊石兽", "化石盔", "镰刀盔", "化石翼龙", "卡比兽", "急冻鸟", "闪电鸟", "火焰鸟", "迷你龙", "哈克龙", "快龙", "超梦"]

const d = ["梦幻"]

const pokemonName = [...a, ...b, ...c, ...d]

const pokemoInfo = [
{"id":"1","cook":"大红大红大红彩色小黄","success":"75",},
{"id":"2","evolution":"1"},
{"id":"3","evolution":"2"},
{"id":"4","cook":"大灰大灰大灰大红大红","success":"70",},
{"id":"5","evolution":"4"},
{"id":"6","evolution":"5"},
{"id":"7","cook":"大蓝大蓝大蓝大蓝大蓝","success":"15",},
{"id":"8","evolution":"7"},
{"id":"9","evolution":"8"},
{"id":"10","cook":"小蓝小蓝小蓝小蓝小蓝","success":"25",},
{"id":"11","evolution":"10"},
{"id":"12","evolution":"11"},
{"id":"13","cook":"小黄小黄小灰小灰小蓝","success":"20",},
{"id":"14","evolution":"13"},
{"id":"15","evolution":"14"},
{"id":"16","cook":"小蓝小蓝小蓝小灰小灰","success":"25",},
{"id":"17","evolution":"16"},
{"id":"18","evolution":"17"},
{"id":"19","cook":"小蓝小蓝小蓝小灰小灰","success":"25",},
{"id":"20","evolution":"19"},
{"id":"21","cook":"小蓝小蓝小蓝小灰小灰","success":"25",},
{"id":"22","evolution":"21"},
{"id":"23","cook":"小黄小黄小黄小灰小灰","success":"40",},
{"id":"24","evolution":"23"},
{"id":"25","cook":"大黄大黄大黄大红大红","success":"70",},
{"id":"26","evolution":"25"},
{"id":"27","cook":"小红小红小红小灰小灰","success":"30",},
{"id":"28","evolution":"27"},
{"id":"29","cook":"小灰小灰小灰小灰小灰","success":"25",},
{"id":"30","evolution":"29"},
{"id":"31","evolution":"30"},
{"id":"32","cook":"小蓝小蓝小蓝小蓝小红","success":"20",},
{"id":"33","evolution":"32"},
{"id":"34","evolution":"33"},
{"id":"35","cook":"小灰小灰小灰小灰大灰","success":"18",},
{"id":"36","evolution":"35"},
{"id":"37","cook":"小红小红小红小黄小灰","success":"38",},
{"id":"38","evolution":"37"},
{"id":"39","cook":"小蓝小灰大黄大黄大灰","success":"27",},
{"id":"40","evolution":"39"},
{"id":"41","cook":"小灰小灰小灰大红大红","success":"40",},
{"id":"42","evolution":"41"},
{"id":"43","cook":"小灰小灰小灰小灰小灰","success":"20",},
{"id":"44","evolution":"43"},
{"id":"45","evolution":"44"},
{"id":"46","cook":"小蓝小蓝小黄大黄大黄","success":"90",},
{"id":"47","evolution":"46"},
{"id":"48","cook":"大黄大黄大黄彩色小蓝","success":"70",},
{"id":"49","evolution":"48"},
{"id":"50","cook":"小红小红小灰小灰大灰","success":"40",},
{"id":"51","evolution":"50"},
{"id":"52","cook":"小蓝小蓝小蓝小灰小灰","success":"20",},
{"id":"53","evolution":"52"},
{"id":"54","cook":"小红小红小蓝小蓝小蓝","success":"15",},
{"id":"55","evolution":"54"},
{"id":"56","cook":"小红小红小红小红小蓝","success":"10",},
{"id":"57","evolution":"56"},
{"id":"58","cook":"小红小红小红小蓝小蓝","success":"40",},
{"id":"59","evolution":"58"},
{"id":"60","cook":"小蓝小蓝小蓝小蓝小红","success":"40",},
{"id":"61","evolution":"60"},
{"id":"62","evolution":"61"},
{"id":"63","cook":"小蓝小蓝小蓝小黄小黄","success":"90",},
{"id":"64","evolution":"63"},
{"id":"65","evolution":"64"},
{"id":"66","cook":"小蓝小蓝小红小红大黄","success":"75",},
{"id":"67","evolution":"66"},
{"id":"68","evolution":"67"},
{"id":"69","cook":"小黄小黄小黄小黄小灰","success":"15",},
{"id":"70","evolution":"69"},
{"id":"71","evolution":"70"},
{"id":"72","cook":"小蓝小蓝小蓝小红小黄","success":"16",},
{"id":"73","evolution":"72"},
{"id":"74","cook":"小灰小灰小灰小灰小黄","success":"48",},
{"id":"75","evolution":"74"},
{"id":"76","evolution":"75"},
{"id":"77","cook":"小黄小黄小黄小黄大黄","success":"80",},
{"id":"78","evolution":"77"},
{"id":"79","cook":"小蓝小蓝小黄小黄大黄","success":"90",},
{"id":"80","evolution":"79"},
{"id":"81","cook":"大黄大黄小红小红小黄","success":"90",},
{"id":"82","evolution":"81"},
{"id":"83","cook":"大蓝大蓝大蓝大红大红","success":"60",},
{"id":"84","cook":"大红大红大红小灰小灰","success":"50",},
{"id":"85","evolution":"84"},
{"id":"86","cook":"小蓝小蓝小蓝大黄大黄","success":"30",},
{"id":"87","evolution":"86"},
{"id":"88","cook":"小蓝小蓝小蓝小蓝大红","success":"47",},
{"id":"89","evolution":"88"},
{"id":"90","cook":"小红小红小蓝小蓝大蓝","success":"30",},
{"id":"91","evolution":"90"},
{"id":"92","cook":"大灰大灰大灰大灰大灰","success":"15",},
{"id":"93","evolution":"92"},
{"id":"94","evolution":"93"},
{"id":"95","cook":"小黄小灰小灰小灰大蓝","success":"100",},
{"id":"96","cook":"大黄大黄大黄大黄大红","success":"30",},
{"id":"97","evolution":"96"},
{"id":"98","cook":"小蓝小蓝小蓝小红小灰","success":"15",},
{"id":"99","evolution":"98"},
{"id":"100","cook":"小红小红小红小红小红","success":"14",},
{"id":"101","evolution":"100"},
{"id":"102","cook":"小黄小黄小黄小红大红","success":"42",},
{"id":"103","evolution":"102"},
{"id":"104","cook":"大黄大黄大黄大蓝大蓝","success":"72",},
{"id":"105","evolution":"104"},
{"id":"106","cook":"小红小蓝大黄大黄大灰","success":"20",},
{"id":"107","cook":"小红小蓝大黄大黄大灰","success":"22",},
{"id":"108","cook":"小蓝小蓝小灰小灰大黄","success":"50",},
{"id":"109","cook":"小蓝小蓝小蓝大蓝大蓝","success":"30",},
{"id":"110","evolution":"109"},
{"id":"111","cook":"小灰小灰小灰小黄小黄","success":"40",},
{"id":"112","evolution":"111"},
{"id":"113","cook":"大蓝大蓝大蓝大灰大灰","success":"10",},
{"id":"114","cook":"大蓝大蓝大蓝大蓝彩色","success":"19",},
{"id":"115","cook":"大黄大黄大黄大灰大灰","success":"30",},
{"id":"116","cook":"小蓝小蓝大红大蓝大蓝","success":"27",},
{"id":"117","evolution":"116"},
{"id":"118","cook":"小红小红小蓝小蓝小蓝","success":"16",},
{"id":"119","evolution":"118"},
{"id":"120","cook":"小红小红小蓝小蓝小蓝","success":"20",},
{"id":"121","evolution":"120"},
{"id":"122","cook":"大灰大灰大灰大红大蓝","success":"10",},
{"id":"123","cook":"大蓝大蓝大蓝大红大红","success":"28",},
{"id":"124","cook":"大红大红大红大黄大黄","success":"17",},
{"id":"125","cook":"大黄大黄大黄大红大红","success":"20",},
{"id":"126","cook":"大红大红大红大灰大灰","success":"16",},
{"id":"127","cook":"大红大红大红大红大红","success":"9",},
{"id":"128","cook":"小灰大红大红大黄大黄","success":"20",},
{"id":"129","cook":"大蓝大蓝大蓝大蓝大蓝","success":"17",},
{"id":"130","evolution":"129"},
{"id":"131","cook":"大蓝大蓝大蓝大蓝大蓝","success":"15",},
{"id":"132","cook":"大红大红大红大黄大灰","success":"15",},
{"id":"133","cook":"大黄大黄大黄大灰大灰","success":"25",},
{"id":"134","evolution":"133"},
{"id":"135","evolution":"133"},
{"id":"136","evolution":"133"},
{"id":"137","cook":"大灰大灰大灰大灰小红","success":"30",},
{"id":"138","cook":"小灰彩色大蓝大蓝大蓝","success":"50",},
{"id":"139","evolution":"138"},
{"id":"140","cook":"小灰彩色大蓝大蓝大蓝","success":"40",},
{"id":"141","evolution":"140"},
{"id":"142","cook":"小灰彩色大蓝大蓝大蓝","success":"10",},
{"id":"143","cook":"大红大红大蓝大灰大黄","success":"15",},
{"id":"144","cook":"大红大蓝大黄大灰海螺","success":"22",},
{"id":"145","cook":"大红大蓝大黄大灰海螺","success":"23",},
{"id":"146","cook":"大红大蓝大黄大灰海螺","success":"25",},
{"id":"147","cook":"大蓝大蓝大蓝大蓝大蓝","success":"40",},
{"id":"148","evolution":"147"},
{"id":"149","evolution":"148"},
{"id":"150","cook":"彩色彩色彩色彩色海螺","success":"40",},
{"id":"151","cook":"大红大蓝大黄大灰海螺","success":"5",},
]

// 遍历所有图片素材, 目前只有 151 只宝可梦
const pokemons = []

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

const formartCook = (id, cook, success) => {
    let info = pokemoInfo[id - 1].cook
    if (info) {
        for (var i = 0; i < info.length; i += 2) {
            let m = info.slice(i, i + 2)
            m = cookList[m]
            cook.push(m)
        }
        return pokemoInfo[id - 1].success
    } else {
        let e = pokemoInfo[id - 1].evolution
        return formartCook(e, cook)
    }
}

const formartEvolution = (id, arr) => {
    let e = pokemoInfo[id - 1].evolution
    if (e) {
        arr.push(e)
        return formartEvolution(e, arr)
    }
}

const setPokemon = () => {
    for (var i = 1; i <= 151; i++) {
        // concat 递归不管用, 只想到重新遍历数组
        // 作用域有问题, 就拆分写了
        let cook = []
        let evolution = []
        formartEvolution(i, evolution)
        var success = formartCook(i, cook, success)
        // formartCook(i, cook, success)
        // 目前只会进化到第三形态
        if (evolution.length > 1) {
            let e = evolution[0]
            evolution.push(e)
            evolution.splice(0, 1)
        }
        let p = {
            id: i,
            name: pokemonName[i - 1],
            src: `/static/image/pokemonAll/${i}.png`,
            cook: cook,
            success: success,
            evolution: evolution,
            ability: [],
        }
        pokemons.push(p)
    }
}

setPokemon()

// 技能
const storeList = {
    '团团石': '团团石',
    '快快石': '快快石',
    '连连石': '连连石',
    '多多石': '多多石',
    '恒恒石': '恒恒石',
    '展展石': '展展石',
}

const abilityObj = (src, list) => {
    let _list = []
    for (var i = 0; i < list.length; i++) {
        let l = list[i]
        _list.push(storeList[l])
    }
    let obj = {
        src: `/static/image/skill/${src}.png`,
        list: _list,
    }
    return obj
}

const ability = (src, list) => {
    let r = []
    if (!src) {
        return r
    }
    if (typeof src != 'string') {
        for (var i = 0; i < src.length; i++) {
            r.push(abilityObj(src[i], list[i]))
        }
    } else {
        r.push(abilityObj(src, list))
    }
    return r
}

// 食材
const cook = (list) => {
    let r = []
    for (var i = 0; i < list.length; i++) {
        let l = list[i]
        r.push(cookList[l])
    }
    return r
}

// 查询并设置信息, poke = {id, 食谱, 技能名, 技能槽}
const search = (poke) => {
    let p = pokemons[poke.id - 1]
    if (poke.cook) {
        // p['cook'] = cook(poke.cook)
        p['ability'] = ability(poke.src, poke.list)
    }
}

const dys = {
    id: 95,
    cook: ['大蓝', '小灰', '小黄', '小黄', '小黄',],
    src: ['bianying', 'luoshi'],
    list: [['团团石', '团团石', '团团石',], ['快快石', '连连石', '多多石',],]
}

const ndl = {
    id: 29,
    cook: ['小红', '小红', '小红', '小黄', '大灰', ],
    src: 'chuipeng',
    list: ['恒恒石', '恒恒石', '恒恒石',],
}
// att
const mwzz = {
    id: 1,
    cook: ['大红', '小红', '小黄', '小黄', '小黄',],
    src: 'tengbian',
    list: ['连连石', '展展石', '展展石',],
}

const lby = {
    id: 69,
    cook: ['大红', '小红', '小黄', '小黄', '小黄',],
    src: 'tengbian',
    list: ['连连石', '展展石', '展展石',],
}

const tmg = {
    id: 114,
    cook: ['大红', '大红', '大红', '小黄', '小黄',],
    src: 'tengbian',
    list: ['连连石', '展展石', '展展石',],
}

const gdy = {
    id: 55,
    cook: ['小蓝', '小蓝', '小蓝', '小红', '小红',],
    src: 'shuipao',
    list: ['连连石', '展展石', '展展石',],
}

const hcl = {
    id: 117,
    cook: ['大黄', '大黄', '小蓝', '小蓝', '小蓝',],
    src: 'shuipao',
    list: ['连连石', '展展石', '展展石',],
}

const bshx = {
    id: 121,
    cook: ['小红', '小红', '小蓝', '小蓝', '小蓝',],
    src: 'shuipao',
    list: ['连连石', '展展石', '展展石',],
}
// def
const wxw = {
    id: 62,
    cook: ['小蓝', '小蓝', '小蓝', '小红', '小黄',],
    src: 'jianmei',
    list: ['团团石', '团团石', '团团石',],
}

const hd = {
    id: 65,
    cook: ['小蓝', '小蓝', '小蓝', '小黄', '小黄',],
    src: 'pingzhang',
    list: ['团团石', '团团石', '团团石',],
}

const wl = {
    id: 66,
    cook: ['大黄', '小红', '小红', '小蓝', '小蓝',],
    src: 'jianmei',
    list: ['团团石', '团团石', '团团石',],
}

const dcsm = {
    id: 73,
    cook: ['小蓝', '小蓝', '小蓝', '小黄', '小黄',],
    src: 'pingzhang',
    list: ['团团石', '团团石', '团团石',],
}

const dks = {
    id: 80,
    cook: ['小蓝', '小蓝', '小蓝', '小红', '小红',],
    src: 'suoke',
    list: ['团团石', '团团石', '团团石',],
}

const ccn = {
    id: 89,
    cook: ['小红', '小红', '小红', '小黄', '大灰',],
    src: 'ronghua',
    list: ['团团石', '团团石', '团团石',],
}

const cjb = {
    id: 91,
    cook: ['小蓝', '小蓝', '小蓝', '小红', '小红',],
    src: 'suoke',
    list: ['团团石', '团团石', '团团石',],
}

let setList = [
    dys,
    ndl,
    mwzz,
    lby,
    tmg,
    gdy,
    hcl,
    bshx,
    wxw,
    hd,
    wl,
    dcsm,
    dks,
    ccn,
    cjb,
]

const setPokemonInfo = () => {
    // search(dys)
    // search(ndl)
    for (var i = 0; i < setList.length; i++) {
        let s = setList[i]
        search(s)
    }
}

setPokemonInfo()

export default pokemons
