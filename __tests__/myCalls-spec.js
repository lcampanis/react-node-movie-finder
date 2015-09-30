jest.dontMock('../components/myCalls');

var React = require('react/addons');
var MyCalls = require('../components/myCalls');
var TestUtils = React.addons.TestUtils;
var $ = require('jquery');

describe('MyCalls', function() {
    var data = {
        "callCharges": {
            "calls": [
              { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
              { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }
            ],
            "total": 4.26
        }
    };

    // Render calls
    var CallsEl = TestUtils.renderIntoDocument(
        <MyCalls data={data.callCharges} />
    );

    /*
        Run expectations
     */
    it('expects 2 calls', function() {
        var count = TestUtils.scryRenderedDOMComponentsWithClass(CallsEl, 'call');

        expect(count.length).toEqual(2);
    });

    it('expects total to equal all call costs', function() {
        var callsCosts = TestUtils.scryRenderedDOMComponentsWithClass(CallsEl, 'call-cost');

        var total = parseFloat(data.callCharges.total),
            costs = 0;

        callsCosts.forEach(function(cost) {
            var costText = cost.getDOMNode().textContent,
                plainCost = costText.split('£')[1];
            costs = parseFloat(costs) + parseFloat(plainCost);
        });

        expect(costs).toEqual(total);
    });

    it('expects all "called" numbers to be a telephone numbers', function() {
        var called = TestUtils.scryRenderedDOMComponentsWithClass(CallsEl, 'call-number');

        called.forEach(function(number) {
            var callText = number.getDOMNode().textContent;

            expect(callText).toMatch(/[0-9]/);
        });


    });

});