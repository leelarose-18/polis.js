var express = require('express');
	var request = require('request');
	var bodyParser = require('body-parser');
	var servercall = require('./servicecall.js');
	
	var app = express();
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

function test(apireq)
{var channel = apireq.body.result.parameters.Channel;
	
	if (channel == 'HBO')
	{
	return ({
	        speech: " Sorry you are not subscribed to " + channel +". Would you like to subscribe " + channel + "?",
	        displayText: "Subscribe",
	        data: {
	            "facebook": {
	                "attachment": {
	                    "type": "template",
	                    "payload": {
	                        "template_type": "button",
	                        "text": " Sorry you are not subscribed to " + channel +". Would you like to subscribe " + channel + "?",
	                        "buttons": [
	                            {
	                                "type": "postback",
	                                "title": "Subscribe",
	                                "payload": "Subscribe"
	                            },
	                            {
	                                "type": "postback",
	                                "title": "No, I'll do it later ",
	                                "payload": "No Subscribe"
	                            }
	                        ]
	                    }
	                }
	            }
	        },
	        source: "Zero Service - app_zero.js"
	    });	
		
	}
	else	
	{	
	var respstr ='Your recording for ' + apireq.body.result.parameters.Programs +' scheduled at '+ apireq.body.result.parameters.TimeofPgm ;
	 return ({
	        speech: respstr + "  Would you like to see some other TV Recommendations for tonight?",
	        displayText: "TV Recommendations",
	        data: {
	            "facebook": {
	                "attachment": {
	                    "type": "template",
	                    "payload": {
	                        "template_type": "button",
	                        "text": respstr + "  Would you like to see some other TV Recommendations for tonight?",
	                        //"template_type":"generic",
	                        //"elements":[
	                        //	{
	                        //		"title":"Hi,there. I am Ent, an entertainment bot.",
	                        //		"image_url":"https://petersfancybrownhats.com/company_image.png",
	                        //		"subtitle":"Would you like to see some recommendations for tonight?",
	                        "buttons": [
	                            {
	                                "type": "postback",
	                                "title": "Yes",
	                                "payload": "Yes"
	                            },
	                            {
	                                "type": "postback",
	                                "title": "No, Let me tell",
	                                "payload": "No"
	                            }
	                        ]
	                    }
	                }
	            }
	        },
	        source: "Zero Service - app_zero.js"
	    });
	}
	}
