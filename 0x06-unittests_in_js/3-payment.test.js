const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with correct arguments and log the total', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(120);

    sendPaymentRequestToApi(100, 20);

    assert.strictEqual(calculateNumberStub.calledWith('SUM', 100, 20), true);
    assert.strictEqual(console.log.lastCall.args[0], 'The total is: 120');

    calculateNumberStub.restore();
  });
});
