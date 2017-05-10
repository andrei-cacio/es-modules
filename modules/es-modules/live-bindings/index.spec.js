import { expect } from 'chai';
import sinon from 'sinon';

import * as counter from './counter';
import main from './';

describe('main', () => {
    beforeEach(() => {
       sinon.stub(counter, 'incrementCounter');
    });
    afterEach(() => {
        counter.incrementCounter.restore();
    });
   it('should call incrementCounter', () => {
     main();
     expect(counter.incrementCounter.calledWithExactly()).to.be.true;
   });
});
