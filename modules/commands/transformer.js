const API = "https://api.botcahx.biz.id/api/textpro/transformer?apikey=0b58ef6f&text="
module.exports.config = {
	name: "transformer",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "transformer logo",
	commandCategory: "text maker",
	usages: "transformer<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    priyansh = args.join(" ");
    (event.type == "message_reply") ? priyansh = event.messageReply.attachments[0].url: priyansh = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("Are Ruko Zara... ✋ Processing 🖨️", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(priyansh)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `🌸YOUR'S LOGO🌸`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`An error has occurred ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};