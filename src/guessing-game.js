class GuessingGame {
    constructor() {
        this.chisla = [];
        this.chislo;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.chisla = [];


        for (let i = this.min; i < this.max; i++) {
            this.chisla.push(i);
        }
        return this.chisla;
    }

    guess() {
        this.chislo = this.chisla[Math.round(this.chisla.length / 2)];
        return this.chislo;
    }

    lower() {
        this.setRange(this.min, this.chislo);
    }

    greater() {
        this.setRange(this.chislo, this.max);
    }
}

module.exports = GuessingGame;
