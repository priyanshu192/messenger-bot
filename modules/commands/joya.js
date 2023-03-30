const fs = require("fs");
module.exports.config = {
	name: "joya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "joya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Joya")==0 || event.body.indexOf("joya")==0 || event.body.indexOf("@Ô Ö Zarnaab DI TU　SAFAR　MERA　TU　HI　MARI　MANZIL　TERE　BENA　GUZARA　AY　DIL　HA　MUSHKIL　TU　MERA　KHUDA　TUHE　DUA　MA　SHAMAL　TERE　BENA　GUZARA　AY　DIL　HA　MUSHKIL　MUJY　AZMATI　HAI　TERI　KAAMI　MARI　HAR　KAMI　KO　HA　TU　LAZMI　TU　WAJOOD　HA　MERA　TUHI　HAR　DUA　MA　SHAMIL　TRY　BENA　GUZRA　AY　DIL　HA　MUSHKIL　MERA　ASMAA　DHOUNDY　TERI　ZAMI　MAARI　HAR　KAMI　KO　TU　HA　LAZMI - II")==0) {
		var msg = {
				body: "It is me Joya💝",
				attachment: fs.createReadStream(__dirname + `/cache/joya2.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }