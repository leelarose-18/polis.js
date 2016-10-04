

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
	        case "callme":
	             res.json(chatInitiate1());
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
	        case "recommand":
	            recommendTVNew2(function (str) { 
	                console.log("inside showrecommendation "); 
	                res.json(recommendTVNew12(str)); 
	            }); 
	            break;
	        default:
	            res.json(recommendTV());
	    }
	});
	
	
	
function chatInitiate1() {
	    return ({
	        speech: "Hi, I am Verizon Entertainment bot.  I can help you with  TV Recommendations or Recording a program. What would you like to do? from function two",
	        displayText: "TV Recommendations",
	        data: {
	            "facebook": {
	                "attachment": {
	                    "type": "template",
	                    "payload": {
	                        "template_type": "button",
	                        "text": "Hi, I am Verizon Entertainment bot.  I can help you with  TV Recommendations or Recording a program. What would you like to do? from function two",
	                        "buttons": [
	                            {
	                                "type": "postback",
	                                "title": "TV Recommendations",
	                                "payload": "Yes"
	                            },
	                            {
	                                "type": "postback",
	                                "title": "Record",
	                                "payload": "I want to record"
	                            }
	                        ]
	                    }
	                }
	            }
	        },
	        source: "Zero Service - app_zero.js"
	    });
	}
