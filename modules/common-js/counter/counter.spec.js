import { expect } from 'chai';

import counterModule from './counter';

describe('counterModule', () => {
    beforeEach(() => {
        counterModule.resetCounter();
    });
    it('should increase the value when calling increaseCounter', () => {
        counterModule.increaseCounter();
        expect(counterModule.counter).to.equal(1);
    });
    it('should decrease the value when calling decreaseCounter', () => {
        counterModule.decreaseCounter();
        expect(counterModule.counter).to.equal(-1);
    });
});