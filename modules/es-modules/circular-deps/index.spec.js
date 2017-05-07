import { expect } from 'chai';
import a from './';

describe('circular-deps', () => {
   it('should export a function', () => {
       expect(a).to.be.a('function');
   });
});
