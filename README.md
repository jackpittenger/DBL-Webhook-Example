# DBL-Webhook-Example
An example on how to use webhooks to get votes for discordbots.org
[Official Docs](https://discordbots.org/api/docs#jslib)

## Libs
This uses [better-Sqlite3](https://www.npmjs.com/package/better-sqlite3) to show how YOU can make a webhook with your bot and save it to a database.
This also uses [dblapi.js](https://www.npmjs.com/package/dblapi.js) for the webhook lib

## Setup
### Starting out
To start, go to your bot's edit page on discordbots.org and scroll to the bottom where you'll find a section on webhooks. Point the domain to yourhostname/dblwebhook (which is the default). Then set the password to whatever you want. You will need it for later.
### What you need to change
* process.env.BOT_TOKEN [bot/Bot.js](https://github.com/realSaddy/DBL-Webhook-Example/blob/master/bot/Bot.js)
* process.env.APITOKEN with your DBL Api Token [found here](https://discordbots.org/api/docs#mybots). [web/WebServer.js](https://github.com/realSaddy/DBL-Webhook-Example/blob/master/web/WebServer.js)
* process.env.PORT with the webhook port [web/WebServer.js](https://github.com/realSaddy/DBL-Webhook-Example/blob/master/web/WebServer.js)
* process.env.PASS with the password specified in the webhook section of your bot's edit page [web/WebServer.js](https://github.com/realSaddy/DBL-Webhook-Example/blob/master/web/WebServer.js)
