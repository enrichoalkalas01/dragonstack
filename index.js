const express = require('express');
const GenerationEngine = require('./engine');

const app = express();
const engine = new GenerationEngine();

engine.start();

app.get(request, );

// setTimeout(() => {
//     engine.stop();
// }, 20000);
