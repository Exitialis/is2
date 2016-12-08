var List = require('./list.js');
var State = require('./state.js');
var Node = require('./node.js');

var node = new Node(new State(3, 3, 0, 0, false));

node.loadNextLevel();

console.log(bfSearch(node));

function bfSearch(node) {
    var open = new List(node);
    var closed = new List();

    do {
        node = open.first();

        if (node.state === true) {
            return findWay(node);
        }

        open.shift();

        closed.push(node);

        node.adj.forEach(function(node) {

            node.loadNextLevel();

            if ( ! open.check(node) || ! closed.check(node)) {
                open.push(node);
            }
        });

    } while(node != null);

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
