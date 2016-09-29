

function chatInitiate1() {
	    return ({
	        speech: "Hi, I am Verizon Entertainment bot.  I can help you with  TV Recommendations or Recording a program. What would you like to do?",
	        displayText: "TV Recommendations",
	        data: {
	            "facebook": {
	                "attachment": {
	                    "type": "template",
	                    "payload": {
	                        "template_type": "button",
	                        "text": "Hi, I am Verizon Entertainment bot.  I can help you with  TV Recommendations or Recording a program. What would you like to do?",
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
module.exports = newfunction; 
