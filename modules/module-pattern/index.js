const counterModule = (() => {
    let counter = 0;
    const increaseCounter = () => counter++;
    const decreaseCounter = () => counter--;
    const resetCounter = () => counter = 0;

    return {
        increaseCounter,
        decreaseCounter,
        resetCounter,
        get counter() {
            return counter;
        }
    };
})();

function main() {
    counterModule.increaseCounter();
    counterModule.decreaseCounter();
}

export { main, counterModule };