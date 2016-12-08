function State() {
    //false - левый берег, true - правый.
    this.boat = false;

    this.leftSide = {
        missionaries: 3,
        cannibals: 3
    };

    this.rightSide = {};
}

State.prototype.changeState = function(missionaries, cannibals) {
    if (this.boat) {
        this.leftSide.missionaries -= missionaries;
        this.leftSide.cannibals -= cannibals;

        this.rightSide.missionaries += missionaries;
        this.rightSide.cannibals += cannibals;

        this.boat = true;
    } else {
        this.rightSide.missionaries -= missionaries;
        this.rightSide.cannibals -= cannibals;

        this.leftSide.missionaries += missionaries;
        this.leftSide.cannibals += cannibals;

        this.boat = false;
    }

    return this;
};

/*State.prototype.loadNext = function() {
    this.
};

State.prototype.firstChange = function() {
    this.changeState(1, 1);
};

State.prototype.secondChange = function () {
    this.changeState(1, 0);
};

State.prototype.thirdChange = function () {
    this.changeState(0, 1);
};

State.prototype.fourthChange = function () {
    this.changeState(2, 0);
};

State.prototype.fiveChange = function () {
    this.changeState(0, 2);
};*/

module.exports = State;
