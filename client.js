'use strict';

var soap = require('soap');
var url = 'http://127.0.0.1:8000/stockquote?wsdl';
var endpoint_url = 'http://127.0.0.1:8000/stockquote';
var args = {
  tickerSymbol: 'AAPL'
};

soap.createClient(url, function(err, client) {
  client.GetLastTradePrice(args, function(err, result) {
    console.log(result);
  });
}, endpoint_url);
