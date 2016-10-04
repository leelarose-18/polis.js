

	var express = require('express');
	var request = require('request');
	var bodyParser = require('body-parser');
	var servercall = require('./servicecall.js');
	//var fs = require("fs");
	//var data = fs.readFileSync('input.txt');
	var app = express();
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var PORT = process.env.PORT || 9000;
	
	var router = express.Router(); 
	
	

	router.post('/webhook', function (req, res) {
	//router.post('/webhook', function (res1) {
	//app.post('/webhook', function (req, res) {
	  //var intent = req.body.result.metadata.intentName;
	
		
	  var intent = req.body.result.action;
	  var mysource = req.body.result.source;
	 console.log('Calling from :' + mysource) ;
	    switch (intent) {
	        case "welcome":
	             res.json(chatInitiate());
	            break;
	        case "Billing":
	            res.json(billInquiry());
	            break;
	        case "showrecommendation":
	            res.json(recommendTV());
	            break;
	        case "Recommendation":
	            res.json(recommendTV());
	            break;
	        case "record":
	            res.json(record(req));
	            break;
	        case "upsell":
	            res.json(upsell(req));
	            break;
	        case "callme":
	            recommendTVNew2(function (str) { 
	                console.log("inside showrecommendation "); 
	                res.json(recommendTVNew1(str)); 
	            }); 
	            break;
	        default:
	            res.json(recommendTV());
	    }
	});
	
	
	
//why?............
function recommendTVNew2(callback) { 
	     
	     //http://vzbotapi.azurewebsites.net/api/values  https://vznode1.herokuapp.com/api/webhook/
	     //https://www98.verizon.com/foryourhome/vzrepair/flowengine/restapi.ashx
	     request.post( 
	         'https://vznode1.herokuapp.com/api/webhook/', 
	         '{"Flow": "TroubleShooting Flows\\Test\\APIChatBot.xml","Request":{"ThisValue":"Trending"}}',
	         function (error, response, body) { console.log('inside external call');
	             if (!error && response.statusCode == 200) { 
	             	console.log('inside external call success');
	             	console.log(body);
	                 callback(body); 
	             } 
	             else 	console.log('error: ' + error + 'response:' + response + 'body:' + body);
	         } 
	     ); 
	  } 
	 function recommendTVNew1(apiresp) { 
	 	   var jsonresp = JSON.parse(apiresp);
	     return ({ 
		         speech: " Hello Here are some recommendations for tonight", 
	         displayText: "TV recommendations", 
	         data:  jsonresp, 
	         source: "Zero Service - app_zero.js" 
	     }); 
	 } 
