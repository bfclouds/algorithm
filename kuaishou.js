// 做过的快手笔试题，当时细节写的有点不够完善，现在补充一下
// 给一组电话号码，后八位3个及以上相同数为豹子号码，3个及以上连续数为顺子号码，相同长度豹子价值大于顺子，长度越长价值越大，若同时满足多种特殊号码，按价值高的算
// 请按特殊号码的价值由大到小输出
// 例 18212348475,18243219485都是顺子号码

function specialPhone(phones) {
    for (let phone of phones) {

    }
}

function isBaozi(phone) {
    let Baozi = [];
}

function isShunzi(phone) {
    let addShunzi = [];
    let reduceShunzi = [];

    let count = 1;
    for (let i = 4; i < phone.length; i++) {
        if (phone[i] === phone[i-1] + 1) {
            count += 1;
        } else if(count >= 3) {
            addShunzi.push(count);
            count = 1;
        } else {
            count = 1;
        }
    }
}
