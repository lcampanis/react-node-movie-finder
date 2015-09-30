'use strict';

var React = require('react/addons');
var MySkyStore = React.createClass({
    render: function() {
        var props = this.props,
            rentals = props.data.rentals.map(function(rental, i) {
                var cost = Number.parseFloat(rental.cost).toFixed(2);

                return (
                    <div key={i} className="clearfix">
                        <h5 className="pull-left">{rental.title}</h5>
                        <h5 className="text-right">&pound;{cost}</h5>
                    </div>
                );
            }) || '-',
            buyAndKeep = props.data.buyAndKeep.map(function(rental, i) {
                var cost = Number.parseFloat(rental.cost).toFixed(2);

                return (
                    <div key={i} className="clearfix">
                        <h5 className="pull-left">{rental.title}</h5>
                        <h5 className="text-right">&pound;{cost}</h5>
                    </div>
                );
            }) || '-';

        props.data.total = Number.parseFloat(props.data.total).toFixed(2);

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div id="calls-panel" className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">My Sky store</h1>
                        </div>
                        <div className="panel-body">
                            <h3>Rentals</h3>
                            {rentals}

                            <h3>Buy &amp; Keep</h3>
                            {buyAndKeep}
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

module.exports = MySkyStore;