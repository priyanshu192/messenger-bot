const fs = require("fs");
module.exports.config = {
	name: "jiya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jiya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Jiya")==0 || event.body.indexOf("Jenny")==0 || event.body.indexOf("@Çûtê ßâçhî")==0 || event.body.indexOf("jiya")==0) {
		var msg = {
				body: "It is me Jiya💝",
				attachment: fs.createReadStream(__dirname + `/cache/jiya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }