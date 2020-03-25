// 做过的快手笔试题，当时细节写的有点不够完善，现在补充一下
// 给一组电话号码，后八位3个及以上相同数为豹子号码，3个及以上连续数为顺子号码，相同长度豹子价值大于顺子，长度越长价值越大，若同时满足多种特殊号码，按价值高的算
// 请按特殊号码的价值由大到小输出
// 例 18212348475,18243219485都是顺子号码

// 感觉太多次循环，效率低下，再想想

function specialPhone(phones) {
    let arrShunzi = [];
    let arrBaozi = [];
    let arrPhone = [];
    for (let phone of phones) {
        let countShunzi  = isShunzi(phone);
        let countBaozi = isBaozi(phone);
        arrShunzi.push(countShunzi);
        arrBaozi.push(countBaozi);
    }

    while (arrShunzi.length > 0) {
        let max = [0, 0];  // 下标，长度,是否是豹子
        for (let i = 0; i < arrShunzi.length; i++) {
            if (arrShunzi[i] === 0 && arrBaozi[i] === 0) {
                continue;
            }
            max = arrShunzi[i] > max[1] ? [i, arrShunzi[i]] : max;
            max = arrBaozi[i] >=  max[1] ? [i, arrBaozi[i]]: max;
        }

        arrPhone.push(phones[max[0]])
        arrShunzi.splice(max[0], 1);
        arrBaozi.splice(max[0], 1);
        phones.splice(max[0], 1);
    }

    return arrPhone;
}

function isBaozi(phone) {
    phone = phone.toString().split('');
    let arrBaozi = [phone[3]];
    let baozi = [];
    for (let i = 4; i < phone.length; i++) {
        if (phone[i] === phone[i-1]) {
            arrBaozi.push(phone[i])
        }else {
            if (arrBaozi.length >= 3) {
                baozi.push(arrBaozi);
            }
            arrBaozi = [phone[i]]
        }
    }
    if (arrBaozi.length >= 3) {
        baozi.push(arrBaozi);
    }

    let count = 0;
    if (baozi.length >= 1) {
        for (let item of baozi) {
            count = item.length > count ? item.length : count;
        }
    }

    return count;
}

function isShunzi(phone) {
    phone = phone.toString().split('')
    let addShunzi = [phone[3]];
    let reduceShunzi = [phone[3]];
    let shunzi = [];

    for (let i = 4; i < phone.length; i++) {
        if (parseInt(phone[i]) === parseInt(phone[i-1]) + 1) {
            addShunzi.push(phone[i]);
        }else {
            // console.log(addShunzi)
            if(addShunzi.length >= 3) {
                shunzi.push(addShunzi);
            }
            addShunzi = [phone[i]];
        }

        if (parseInt(phone[i]) === parseInt(phone[i-1]) - 1) {
            reduceShunzi.push(phone[i]);
        }else {
            if(reduceShunzi.length >= 3) {
                shunzi.push(reduceShunzi);
            }
            reduceShunzi = [phone[i]];
        }
    }

    if (addShunzi.length >= 3) {
        shunzi.push(addShunzi)
    }
    if (reduceShunzi.length >= 3) {
        shunzi.push(reduceShunzi)
    }

    let count = 0;
    if (shunzi.length >= 1) {
        for (let item of shunzi) {
            count = item.length > count ? item.length : count;
        }
    }
    return count;
}
