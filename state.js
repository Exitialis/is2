function State(leftM, leftC, rightM, rightC, boat) {
    //false - левый берег, true - правый.
    this.boat = boat;

    this.leftSide = {
        missionaries: leftM,
        cannibals: leftC
    };

    this.rightSide = {
        missionaries: rightM,
        cannibals: rightC
    };
}

State.prototype.changeState = function(missionaries, cannibals) {

    var leftM = this.leftSide.missionaries,
        leftC = this.leftSide.cannibals,
        rightM = this.rightSide.missionaries,
        rightC = this.rightSide.cannibals,
        boat = this.boat;

    if ( ! this.boat) {
        boat = true;

        leftM -= missionaries;
        leftC -= cannibals;

        rightM += missionaries;
        rightC += cannibals;
    } else {
        boat = false;

        rightM -= missionaries;
        rightC -= cannibals;

        leftM += missionaries;
        leftC += cannibals;
    }

    if ((rightM < rightC && rightM != 0) || (leftM < leftC && leftM != 0)) {
        return null;
    }

    if (rightM < 0 || rightC < 0 || leftC < 0 || leftM < 0) {
        return null;
    }

    if (rightM == 3 && rightC == 3) {
        return true;
    }

    return new State(leftM, leftC, rightM, rightC, boat);
};

module.exports = State;
