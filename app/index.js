const express = require('express');
const GenerationEngine = require('../app/generation/engine');

const app = express();
const engine = new GenerationEngine();

engine.start();

app.get('/dragon/new', (req, res) => {
    res.json({ dragon: engine.generation.newDragon() });
});

module.exports = app;

// setTimeout(() => {
//     engine.stop();
// }, 20000);
