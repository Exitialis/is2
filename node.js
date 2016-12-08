function Node(state) {
    this.state = state;

    this.parent = null;
    this.adj = [];

    this.loadNextLevel = function() {
        var changed;
        var state = this.state;

        if (!state) {
            return false;
        }

        changed = state.changeState(1, 0);
        setNewState(changed, this);

        changed = state.changeState(0, 1);
        setNewState(changed, this);

        changed = state.changeState(2, 0);
        setNewState(changed, this);

        changed = state.changeState(0, 2);
        setNewState(changed, this);

        changed = state.changeState(1, 1);
        setNewState(changed, this);
    };

    function setNewState(state, parentNode) {
        if (!state) {
            return;
        }

        var node = new Node(state);
        node.setParent(parentNode);

        parentNode.addAdj(node);
    }
}

Node.prototype.removeAdj = function(adj) {
    this.adj.slice(this.adj.indexOf(adj), 1);
};

Node.prototype.addAdj = function(adj) {
    this.adj.push(adj);
};

Node.prototype.setParent = function(parent) {
    this.parent = parent;
};

module.exports = Node;
