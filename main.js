// latest rates

//const request = require('request-promise');
//request('https://freecurrencyapi.net/api/v2/latest?apikey=f48b8570-9afb-11ec-a08b-195c1b0a38b5')
//.then(response => {
    //var parsedData = JSON.parse(response);

    //let trx_id = JSON.parse(result.replace(/^[^{]*(.*)[^}]*$/,'$1')).transaction_id;
    //var base_currency = parsedData.base_currency;
    //let rates = parsedData.rates;
    
    //console.log("From " + parsedData['query']['base_currency'] +" To  JPY " + parsedData['data']['JPY']);
    
//})
//.catch(error => {
    //console.log(error)
//})

//
var http = require('http'); // 1 - Import Node.js core module
//const request = require('request-promise');

var server = http.createServer(function (req, res) {   // 2 - creating server
    const request = require('request-promise');
    request('https://freecurrencyapi.net/api/v2/latest?apikey=f48b8570-9afb-11ec-a08b-195c1b0a38b5')
    .then(response => {
        var parsedData = JSON.parse(response);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //console.log("From " + parsedData['query']['base_currency'] +" To  JPY " + parsedData['data']['JPY']);
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Foreign-Currency Boeard Display Based on 1 USD Dollar</title>');
        res.write('</head>');
        res.write('</html>');
        res.write('<body>');
        res.write('<h1>Foreign-Currency Boeard Display Based on 1 USD Dollar</h1>');
        res.write('<table border="1">');
        res.write('<tr>');
        res.write('<th>Currency</th>');
        res.write('<th>Rate</th>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td>' + 'JPY'+ '</td>');
        res.write('<td>' + parsedData['data']['JPY'] + '</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td>' + 'CNY'+ '</td>');
        res.write('<td>' + parsedData['data']['CNY'] + '</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td>' + 'EUR'+ '</td>');
        res.write('<td>' + parsedData['data']['EUR'] + '</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td>' + 'GBP'+ '</td>');
        res.write('<td>' + parsedData['data']['GBP'] + '</td>');
        res.write('</tr>');

        res.write('</body>');
        res.end();
    })
    .catch(error => {
        console.log(error)
    })
    //handle incomming requests here..
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('<html><body><p>This is student Page.</p></body></html>');
    //res.end();

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')