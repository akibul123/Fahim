const fs = require("fs");
module.exports.config = {
  name: "😄",
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😄")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🤥")==0) {
		var msg = {
				body: "—🐰-!<‘𝘁𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲_🖇️🐹🌈-!!\n\n      —ভালোবাসা সুন্দর 🐼🍓✨\n    যদি তুমি বাসতে জানো ! 🤍<3\n𝐊𝐈𝐍𝐆 _ 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘😻",
				attachment: fs.createReadStream(__dirname + `/noprefix/rahad5.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
