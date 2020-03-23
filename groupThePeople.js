// 有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。给你一个长度为 n 的数组 groupSizes，
// 其中包含每位用户所处的用户组的大小，请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const groupThePeople = function(groupSizes) {
    let arr = new Map();
    let res = [];
    for (let i = 0; i < groupSizes.length; i++) {
        let value = groupSizes[i];
        if (arr.get(value)) {
            arr.get(value).push(i);
            let tem =arr.get(value);

            if (tem.length === value) {
                res.push(tem)
                arr.delete(value)
            }
        } else {
            arr.set(value, [i])
            let tem =arr.get(value);

            if (tem.length === value) {
                res.push(tem)
                arr.delete(value)
            }
        }
    }

    return res;
};
