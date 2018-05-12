var Database = require('better-sqlite3');
var db = new Database('votes.db');

const DBL = require('dblapi.js');
const dbl = new DBL(process.env.APITOKEN, { webhookPort: process.env.PORT, webhookAuth: process.env.PASS });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
  try{
  var a = db.prepare(`CREATE TABLE IF NOT EXISTS votes (id TEXT, time TEXT)`).run(); 
  var stmt = db.prepare(`INSERT INTO votes VALUES (@id, @time)`);   
  stmt.run({
            id: vote.user,
            time: new Date().toString()
        });
  } catch(e){
   console.log(e); 
  }
});
