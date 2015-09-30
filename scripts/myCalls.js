'use strict';

var React = require('react/addons');
var MyCalls = React.createClass({
    render: function() {
        var props = this.props,
            calls = props.data.calls.map(function(call, i) {
                var cost = parseFloat(call.cost).toFixed(2);

                return (
                    <div key={i} className="call clearfix">
                        <div className="pull-left"><span className="call-number">{call.called}</span> <small className="call-duration">({call.duration})</small></div>
                        <div className="call-cost text-right">&pound;{cost}</div>
                    </div>
                );
            });

        props.data.total = parseFloat(props.data.total).toFixed(2);

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div id="calls-panel" className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">My call charges</h1>
                        </div>
                        <div className="panel-body">
                            {calls}
                        </div>
                        <div className="panel-footer clearfix">
                            <h3 className="pull-left">Total</h3>
                            <h3 className="pull-right"> &pound;{props.data.total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MyCalls;