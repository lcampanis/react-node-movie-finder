'use strict';

var React = require('react');
var MyBill = require('components/myBill');

React.render(
    <MyBill source="bill.json" />,
    document.getElementById('container-content')
);