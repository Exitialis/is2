var List = require('./list.js');
var State = require('./state.js');
var Node = require('./node.js');

var node = new Node(new State(3, 3, 0, 0, false));

console.log(bfSearch(node));

function bfSearch(node) {
    var open = new List(node);
    var closed = new List();

    do {
        node = open.first();

        if (node.state.completed === true) {
            return findWay(node);
        }

        node.loadNextLevel();

        open.shift();
        closed.push(node);

        node.adj.forEach(function(node) {
            if ( ! open.check(node) || ! closed.check(node)) {
                open.push(node);
            }
        });
    } while(node != null);

    return false;
}

function findWay(node) {

    var path = [];
    path.unshift(node.state);

    while (node.parent != null) {
        path.unshift(node.parent.state);
        node = node.parent;
    }

    return path;
}
