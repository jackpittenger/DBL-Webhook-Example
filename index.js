 /* Check for environment variables */
void function(){
  let variables = ["GLITCH_PROJECT_NAME", "BOT_TOKEN"];
  let missing = [];
  variables.forEach(k=> {
    let v = process.env[k];
    if(v === undefined || v === null || v === ""){
      missing.push(k);
    }
  });
  if(missing.length > 0){
    throw new Error(`Missing the following environment variable(s): ${missing.join(", ")}. Please provide a value for them in the .env file for this to work.`);
  }
}();

/* Let the fun begin :D */
require("./web/WebServer");
require("./bot/Bot");
