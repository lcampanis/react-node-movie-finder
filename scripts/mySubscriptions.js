'use strict';

var PATH = "../";

var React = require('react/addons');

var MySubscriptions = React.createClass({
    render: function() {
        var props = this.props,
            subscriptions = props.data.subscriptions.map(function(subscription, i) {
                var cost = parseFloat(subscription.cost).toFixed(2);

                return (
                    <div key={i} className="subscription clearfix">
                        <h4 className="pull-left">{subscription.name} <small className="subscription-type">({subscription.type})</small></h4>
                        <h4 className="subscription-cost pull-right">&pound;{cost}</h4>
                    </div>
                );
            });

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div id="subscription-panel" className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">My subscriptions</h1>
                        </div>
                        <div className="panel-body">
                            <h3>{props.period.from} - {props.period.to}</h3>
                            {subscriptions}
                        </div>
                        <div className="panel-footer clearfix">
                            <h3 className="pull-left">Total</h3>
                            <h3 className="pull-right">&pound;{props.data.total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MySubscriptions;