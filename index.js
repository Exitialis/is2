var List = require('list.js');
var State = require('state.js');

function bfSearch() {
    var open = new List();
    var closed = new List();

    //Берем первую вершину из списка
    var node;

    do {
        node = open.first();

        if (node.name == this.find_el) {
            this.result = this.findWay(node);
            this.showOpen = open;
            this.showClosed = closed;

            return true;
        }

        open.shift();
        closed.push(node);
        node.adj.forEach(function(node) {
            if ( ! open.check(node) || ! closed.check(node)) {
                open.push(node);
            }
        });
    } while(node != null);
    this.result = ['Не удалось найти путь'];
    return false;
}

function findWay(node) {

    var path = [];
    path.unshift(node.name);

    while (node.parent != null) {
        path.unshift(node.parent.name);
        node = node.parent;
    }

    return path;
}
