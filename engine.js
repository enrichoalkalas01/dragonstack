const Generation = require('./generation');

class GenerationEngine {
    constructor() {
        this.generation = null;
    }

    start() {
        this.buildNewGeneration();
        this.timer = null;
    }

    stop() {
        clearTimeout(this.timer);
    }

    buildNewGeneration() {
        this.generation = new Generation();

        console.log('New Generation', this.generation);

        this.timer = setTimeout(
            () => this.buildNewGeneration(), this.generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;