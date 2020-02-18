var express = require('express');
var app = express();
const mysql = require('mysql');

app.listen(5050);

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mas_market_place'
});

con.connect((err) => {
  if (err) throw err;
  //console.log('Connected To Database!');
});

app.route('/mas_data').get(function(req,res){
	console.log('Request Recieved');
	con.query('SELECT * FROM all_data', (err,rows) => {
	  if(err) throw err;

	  console.log('Data received from Db:');
	  console.log(rows);
	  res.writeHead(200,{'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
	 //res.json(rows);
	  res.end(JSON.stringify({rows}));
	});
});