console.log('a starting');
let done = false;
import * as b from './b';
console.log('in a, b.done = %j', b.done);
done = true;
export { done };
console.log('a done');