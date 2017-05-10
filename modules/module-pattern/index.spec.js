const { expect } = require('chai');
const sinon = require('sinon');

const { main, counterModule} = require('./');

describe('module-pattern', () => {
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

   describe('main', () => {
        beforeEach(() => {
            sinon.stub(counterModule, 'increaseCounter');
            sinon.stub(counterModule, 'decreaseCounter');
        });
        afterEach(() => {
           counterModule.increaseCounter.restore();
           counterModule.decreaseCounter.restore();
        });
        it('should call increaseCounter', () => {
           main();
           expect(counterModule.increaseCounter).to.be.called;
        });
       it('should call decreaseCounter', () => {
           main();
           expect(counterModule.decreaseCounter).to.be.called;
       });
   });
});