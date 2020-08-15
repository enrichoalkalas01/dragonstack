const Dragon = require('./dragon');
const { REFRESH_RATE, SECONDS } = require('./config');
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
    }

    calculateExpiration() {
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ?
            refreshRate - expirationPeriod : refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon() {
        if(Date.now() > this.expiration) {
            throw new error(`This Generation Expired On ${this.expiration} `);
        }

        return new Dragon();
    }
}

module.exports = Generation;