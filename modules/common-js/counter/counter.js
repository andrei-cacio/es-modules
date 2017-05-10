let counter = 0;
const increaseCounter = () => counter++;
const decreaseCounter = () => counter--;
const resetCounter = () => counter = 0;

module.exports = {
    increaseCounter,
    decreaseCounter,
    resetCounter,
    get counter() {
        return counter;
    }
};