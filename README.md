# Anatomy of ES Modules
An overview of modules in javascript. 

## Contents

### Pre-transpilers/tooling era
- [module pattern](https://github.com/andrei-cacio/es-modules#module-pattern11)
- [Commonjs](https://github.com/andrei-cacio/es-modules#commonjs)
- AMD

### Post-transpilers/tooling era
- ES Modules
- System.import()

### ES Modules now
- import()


## [Module pattern](./modules/module-pattern)[[11]](https://github.com/andrei-cacio/es-modules#references)
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

## [Commonjs](./modules/common-js)
### Implementations:
- nodejs
- browserify (for browser usage)
- webpack

### Syntax
- `require()` function
- the `module` object

### Main characteristics:
#### Synchronous parsing 
- all **required** dependencies are loaded synchronous
- async implementations for better browser support: 
    - `require.ensure()` [(webpack code splitting)](https://webpack.github.io/docs/code-splitting.html)

#### Dynamic module structure
- all dependencies injected using `require()` are handled at runtime.
 
```javascript
//module.js
console.log('module1 required');

//module2.js
console.log('module2 required');

//index.js
setTimeout(() => require('./module2'), 3000);

if (false) {
    require('./module3');
}

require('./module');
```

#### Cyclic dependencies support (sorta)
[Example from Nodejs docs](./modules/common-js/cyclic-deps)[[7]](https://github.com/andrei-cacio/es-modules#references)

#### Counter example
```javascript
// counter.js
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
```
```javascript
// index.js
const counter = require('./counter');

function main() {
    counterModule.increaseCounter();
    counterModule.decreaseCounter();
}

module.exports = main;
```

## ES Modules
### Implementations
- webpack + babel
- rollup

### Syntax
#### import[[5]](https://github.com/andrei-cacio/es-modules#references)
```javascript
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
```
### export[[6]](https://github.com/andrei-cacio/es-modules#references)
```javascript
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Stage 1 proposal - Lee Byron
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

### Main characteristics:
#### Static module structure
- all `import`s and `export`s must be declared top level
- `import`s are hoisted
- all `import`s are read only views on exports [[13]](https://github.com/andrei-cacio/es-modules#references)


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
12. [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/)
13. [Exploring ES6 - 16.3.5 Imports are read-only views on exports](http://exploringjs.com/es6/ch_modules.html#_imports-are-read-only-views-on-exports)