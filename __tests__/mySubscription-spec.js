jest.dontMock('../components/mySubscriptions');
jest.dontMock('../components/moment');

var React = require('react/addons');
var MySubscriptions = require('../components/mySubscriptions');
var TestUtils = React.addons.TestUtils;
var $ = require('jquery');

describe('MySubscriptions', function() {
    var data = {
        "package": {
            "subscriptions": [
                { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 }
            ],
            "total": 71.40
        },
        "statement": {
            "period": {
                "from": "2015-01-26",
                "to": "2015-02-25"
            }
        }
    };

    // Render subscriptions
    var SubscriptionsEl = TestUtils.renderIntoDocument(
        <MySubscriptions data={data.package} period={data.statement.period} />
    );

    /*
        Run expectations
     */
    it('expects only one subscription', function() {
        var count = TestUtils.scryRenderedDOMComponentsWithClass(SubscriptionsEl, 'subscription');

        expect(count.length).toEqual(1);
    });

    it('expects cost not to be zero and be in GBP pounds', function() {
        var subscription = TestUtils.findRenderedDOMComponentWithClass(SubscriptionsEl, 'subscription-cost');

        var cost = parseFloat(data.package.subscriptions[0].cost).toFixed(2);

        expect(subscription.getDOMNode().textContent).toEqual('£' + cost);
    });

    it('expects subscription type to be broadband, tv or talk', function() {
        var subscription = TestUtils.findRenderedDOMComponentWithClass(SubscriptionsEl, 'subscription-type');

        var type = data.package.subscriptions[0].type;

        expect(subscription.getDOMNode().textContent).toEqual('(' + type + ')');
    });

});