# Anatomy of ES Modules
An overview of modules in javascript.

## Contents

### Pre-transpilers/tooling era
- module pattern
- AMD
- Commonjs

### Post-transpilers/tooling era
- ES Modules
- System.import()

### ES Modules now
- import()


## [Module pattern](./modules/module-pattern)[11]
This patterns was highly used for data encapsulation and logic decoupling. 

```javascript
// counter.js
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
```

```javascript
// index.js
counterModule.increaseCounter();
counterModule.decreaseCounter();

console.log(counterModule.counter); // 0
```

# References
1. [ECMAScript modules in browsers - Jake Archibald](https://jakearchibald.com/2017/es-modules-in-browsers/)
2. [ES6 Modules in Depth - Nicolás Bevacqua](https://ponyfoo.com/articles/es6-modules-in-depth)
3. [Exploring ES6 - Chapter 16 "Modules" - Dr. Axel Rauschmayer](http://exploringjs.com/es6/ch_modules.html)
4. [ES6 In Depth: Modules - Jason Orendorff](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
5. [import - MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
6. [export - MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
7. [Cyclic deps - Nodejs docs](https://nodejs.org/api/modules.html#modules_cycles)
8. [ES Proposals: import() - Domenic Denicola](https://github.com/tc39/proposal-dynamic-import)
9. [ES Proposals: export ns from - Lee Byron](https://github.com/leebyron/ecmascript-export-ns-from)
10. [ES Proposals: export * as ns from - Lee Byron](https://github.com/leebyron/ecmascript-export-ns-from)
11. [The Revealing Module - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)