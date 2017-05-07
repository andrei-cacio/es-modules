import { expect } from 'chai';
import sinon from 'sinon';

import counterModule from './counter';
import main from './'

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