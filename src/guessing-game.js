class GuessingGame {
    constructor() {
        this.root = null;
    }

    setRange(min, max) {
        this.left = min;     
        this.right = max;
    }

    guess() {
        if (this.left === 0) {    
            return Math.round(this.right / 2);
        } else {    
            return Math.round((this.right - this.left) / 2) + this.left;
        }
    }

    lower() {
        this.right = this.guess();
    }

    greater() {
        this.left = this.guess();
    }
}

module.exports = GuessingGame;
