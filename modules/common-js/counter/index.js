const counterModule = require('./counter');

function main() {
    counterModule.increaseCounter();
    counterModule.decreaseCounter();
}

module.exports = main;