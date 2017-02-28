function Stack() {

    var items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}


// 用栈数据结构完成一个进制转换方法

var baseConverter = function (decNumber, base) {

    var resultArray = new Stack(),
        digits = '0123456789ABCDEF',
        tempNumber,
        result;

    while (decNumber > 0) {

        tempNumber = Math.floor(decNumber % base);
        resultArray.push(tempNumber);
        decNumber = Math.floor(decNumber / base);

    }

    while (!resultArray.isEmpty()) {

        result += digits[resultArray.pop()];

    }

    return result;

};

// 测试用例

baseConverter(3, 2); // 11
baseConverter(11, 8); // 13
baseConverter(11, 10); // 11
baseConverter(20, 16); // 14
baseConverter(12, 16); // C

