const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
var Database = require('better-sqlite3');

function checkvoted(message) {
          var a = db2.prepare(`CREATE TABLE IF NOT EXISTS votes (id TEXT, time TEXT)`).run(); 
          var row2 = db2.prepare(`SELECT id FROM votes WHERE id="${message.author.id}"`).all();
          if(!row2[0]){
          //if they haven't voted
            message.channel.send("https://discordbots.org/bot/441389975951507486/vote *(Message will go away after voting)*")
          } 
          
}

client.on("ready", function() {;
    console.log("READY");
    setInterval(() => {
    var a = db2.prepare(`CREATE TABLE IF NOT EXISTS votes (id TEXT, time TEXT)`).run(); 
    var row2 = db2.prepare(`SELECT * FROM votes`).all();      
      var dataie1 = new Date();
    row2.forEach(function(e) {
      var dataie2 = Date.parse(e.time);
      //deletes if it has been over 24 hours (1 day)
      if(dataie1-dataie2 > 86400000) {
          var b = db2.prepare(`DELETE FROM votes WHERE id=${e.id}`).run();
      };
    });
    }, 60000);
})

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
  return message.channel.send("I can not use commands in DMs.");
  }
  if(!message.content.startsWith(prefix)) return;
  var args = message.content.substring(prefix.length).split(" ");
  
  //Nagging example
    if(args[0] == prefix+"nag"){
      checkvoted(message)
      return message.channel.send("content")
  }
  })
  
  client.login(process.env.BOT_TOKEN);
