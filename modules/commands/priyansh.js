const fs = require("fs");
module.exports.config = {
	name: "priyansh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "priyansh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Priyansh Rajput")==0 || event.body.indexOf("Priyanshu")==0 || event.body.indexOf("@Prîyánsh Rajpût")==0 || event.body.indexOf("Priyansh")==0) {
		var msg = {
				body: "Prîyansh ✨💖🥀",
				attachment: fs.createReadStream(__dirname + `/cache/priyansh.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }