console.log('b starting');
let done = false;
import * as a from './a';
console.log('in b, a.done = %j', a.done);
done = true;
export { done };
console.log('b done');