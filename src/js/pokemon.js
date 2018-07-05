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

// 遍历所有图片素材, 目前只有 151 只宝可梦
const pokemons = []

for (var i = 1; i <= 151; i++) {
    let p = {
        id: i,
        name: pokemonName[i - 1],
        src: `/static/image/pokemonAll/${i}.png`,
        cook: [],
        ability: [],
    }
    pokemons.push(p)
}

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
const cookList = {
    '小红': '小红',
    '小蓝': '小蓝',
    '小黄': '小黄',
    '小灰': '小灰',
    '大红': '大红',
    '大蓝': '大蓝',
    '大黄': '大黄',
    '大灰': '大灰',
    '彩色': '彩色',
    '海螺': '海螺',
}

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
        p['cook'] = cook(poke.cook)
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
