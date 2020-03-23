// 完美数
// 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
//
// 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False

const checkPerfectNumber = function (nums) {
    if (nums === 1 || nums === 0) {
        return false
    }
    let value = 1;
    let sqrt = Math.ceil(Math.sqrt(nums));

    for (let i = 2; i < sqrt; i++) {
        if (nums % i === 0) {
            value += i;
            value += nums / i;
        }
    }

    return value === nums;
};

