module.exports.config = {
    name: "alika1",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("I'm So So Sorry");
setTimeout(() => {a({body: "Forgive Me Pls" })}, 3000);
setTimeout(() => {a({body: "Please Na"})}, 5000);
setTimeout(() => {a({body: "Please 🥺" })}, 7000);
setTimeout(() => {a({body: "Please 😞" })}, 9000);
setTimeout(() => {a({body: "I Know I'm So Late" })}, 12000);
setTimeout(() => {a({body: "I Know I'm Care less" })}, 15000);
setTimeout(() => {a({body: "But The Thing Is" })}, 17000);
setTimeout(() => {a({body: "I Know Everything" })}, 20000);
setTimeout(() => {a({body: "You Know Na" })}, 23000);
setTimeout(() => {a({body: "I'm So Busy Na" })}, 25000);
setTimeout(() => {a({body: "I Know Very Well" })}, 28500);
setTimeout(() => {a({body: "But What I Do My Luck Is Bad" })}, 31000);
setTimeout(() => {a({body: "Please Don't Mind Na Baby" })}, 36000);
setTimeout(() => {a({body: "Why You So Sad" })}, 39000);
setTimeout(() => {a({body: "I Can't See You Like This" })}, 40000);
setTimeout(() => {a({body: "So, Please Keep Smile" })}, 65000);
setTimeout(() => {a({body: "And Don't Be Sad" })}, 70000);
setTimeout(() => {a({body: "And Stay Always Wit Me" })}, 75000);
setTimeout(() => {a({body: "Be Happy" })}, 80000);
setTimeout(() => {a({body: "I'm So Sorry" })}, 85000);
setTimeout(() => {a({body: "Extremly Sorry Baby"})} , 90000);
setTimeout(() => {a({body: "And Don't Be Sad Please" })}, 95000);
setTimeout(() => {a({body: "My Dear Alika" })}, 100000);
setTimeout(() => {a({body: "God Always Keep You Happy" })}, 105000);
setTimeout(() => {a({body: "I løve yøu sø múch My Prînçess 🥀✨💝"})} , 115000);




  
  }
