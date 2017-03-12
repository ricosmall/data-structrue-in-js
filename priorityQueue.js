var priorityQueue = function () {
    var items = [];

    var QueueElement = function (element, priority) {
        this.element = element;
        this.priority = priority;
    };

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;

            for (var i=0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                items.push(queueElement);
            }
        }
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
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
};


// 击鼓传花游戏模拟
// 游戏规则：
// 孩子们围成一个圈，把花尽快地传给旁边的人。
// 某一时刻传花停止，这个时候花在谁手里，谁就被淘汰。
// 重复这一过程，直到只剩一个孩子（胜利者）。

var hotPotato(nameList, num) {
    var queue = new Queue();

    for (var i=0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1) {
        for (var i=0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }

    return queue.dequeue();
};

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者: ' + winner);
