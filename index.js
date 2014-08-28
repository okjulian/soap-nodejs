'use strict';

var http = require('http');
var soap = require('soap');
var server;

var myService = {
  StockQuoteService: {
    StockQuotePort: {
      GetLastTradePrice: function(args) {
        if (args.tickerSymbol === 'trigger error') {
          throw new Error('triggered server error');
        } else {
          return { price: 19.56 };
        }
      }
    }
  }
};

var xml = require('fs').readFileSync('stockquote.wsdl', 'utf8');

server = http.createServer(function(request,response) {
  response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/stockquote', myService, xml);
