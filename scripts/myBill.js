'use strict';

var path = path || null;

var React = require('react/addons');
var $ = require('components/jquery');
var Moment = require('components/moment');

var MySubscriptions = require('components/mySubscriptions');
var MyCalls = require('components/myCalls');
var MySkyStore = require('components/mySkyStore');

var MyBill = React.createClass({
    getInitialState: function() {
        return {
            data: null
        };
    },

    setData: function(data) {
        this.setState({
            data: data
        });
    },

    fetchData: function() {console.info(this.props.source);
        return $.ajax({
            url: this.props.source,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setData(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.source, status, err.toString());
            }.bind(this)
        });
    },

    componentWillMount: function() {
        this.fetchData();
    },

    render: function() {
        if (this.state.data) {

            var data = this.state.data;

            data.statement.due = Moment(data.statement.due).format('DD MMM');
            data.statement.generated = Moment(data.statement.due).format('DD MMM YYYY');
            data.total = parseFloat(data.total).toFixed(2);

            // format subscription info
            data.statement.period.from = Moment(data.statement.period.from).format('DD MMM');
            data.statement.period.to = Moment(data.statement.period.to).format('DD MMM');
            data.package.total = parseFloat(data.package.total).toFixed(2);

            return (
                <div id="bill">
                    <div id="bill-info" className="row">
                        <div className="col-sm-6">
                            <h1><small>Payment due date</small><br />
                                <span className="bill-due">{data.statement.due}</span></h1>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-right">
                                <h1><small>Bill total</small><br />
                                &pound;{data.total}</h1>
                            </div>
                        </div>
                    </div>

                    <MySubscriptions data={data.package} period={data.statement.period} />
                    <MyCalls data={data.callCharges} />
                    <MySkyStore data={data.skyStore} />

                    <div className="row">
                        <div className="col-sm-12">
                            <small>Statement date: {data.statement.generated}</small>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div>Loading...</div>);
        }
    }
});

module.exports = MyBill;