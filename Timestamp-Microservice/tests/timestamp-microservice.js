var chai = require('chai');
var expect = chai.expect;
var timeStamp = require('../timeStamp');

describe('timeStamp', function() {
  it('if we pass date it will give us unix time stamp', function() {
    const unixTimeStamp = new Date("December 15, 2015").getTime(),
    	unix = null, date = "December 15, 2015";
    expect(timeStamp.getTimeStamp(date, unix)).to.equal(unixTimeStamp);
  });

  it('if we pass unix time stamp it will give date', function() {
    const unix = new Date("December 15, 2015").getTime();
    const date = null;
    expect(timeStamp.getTimeStamp(date, unix)).to.equal("December 15, 2015");
  });
});