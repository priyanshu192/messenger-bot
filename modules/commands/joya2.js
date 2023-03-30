const fs = require("fs");
module.exports.config = {
	name: "alika",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "alika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Alika")==0 || event.body.indexOf("alika")==0 || event.body.indexOf("@Õ Õ Maybe Alika MUJHE　NEEND　AATI　NAHI　HAI　AKELE　KHAWABON　MEIN　AAYA　KARO　NAHI　CHAL　SAKUNGA　TUMHARE　BINA　MAIN　MERA　TUM　SAHARA　BANO　IK　TUMHE　CHAHNE　KE　ALAAWA　AUR　KUCH　HUMSE　HOGA　NAHI　BOL　DO　NA　ZARA　DIL　MEIN　JO　HAI　CHHIPA　MAIN　KISI　SE　KAHUNGA　NAHI　BOL　DO　NA　ZARA　DIL　MEIN　JO　HAI　CHHIPA　MAIN　KISI　SE　KAHUNGA　NAHI　MAIN　KISI　SE　KAHUNGA　NAHI - X")==0) {
		var msg = {
				body: "It is me Alika💝",
				attachment: fs.createReadStream(__dirname + `/cache/joya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }