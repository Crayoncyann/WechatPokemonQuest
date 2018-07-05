import pokemons from './pokemon'

export const log = console.log.bind(console)

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

export const ability = (src, list) => {
    let r = []
    if (!src) {
        return r
    }
    if (typeof src != 'String') {
        for (var i = 0; i < src.length; i++) {
            r.push(abilityObj(src[i], list[i]))
        }
    } else {
        r.push(abilityObj(src[0], list))
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

export const cook = (list) => {
    let r = []
    for (var i = 0; i < list.length; i++) {
        let l = list[i]
        r.push(cookList[l])
    }
    return r
}

// 查询并设置信息, poke = {id, 食谱, 技能名, 技能槽}
export const search = (poke) => {
    let p = pokemons[poke.id - 1]
    if (poke.cook) {
        p['cook'] = cook(poke.cook)
        p['ability'] = ability(poke.src, poke.list)
    }
    return p
}
