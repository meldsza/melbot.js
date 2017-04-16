# Melbot.js is a bot template using discord.js
## Adding commands
The commands must follow a certain format
```js
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
async function command(params, message) {
    /**
      Command logic
    */
}
/**
 * description of the command
 */
const description = "plays ping pong";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
```
The next step is to map it in commandlist.js
## Adding Modules
Modules is bot code that is independent of the commands
To add a module, just declare it under modules and require it in modules.js
## Settings
All settings should be put under settings.json
Sample settings.json is already provided
```js
{
    "token": "TOKEN_HERE",
    "owners": [
        "184547913509109761"
    ],
    "identifier": "~",
    "delimiter": " "
}
```
## Reaction Nav
Using the reaction nav provided is simple
```js
    msg.react('▶').then(
    msg.react('◀')).then(
    msg.react('⏩')).then(
    msg.react('⏪')
    );
bot.emit('addNav', { message: msg, exec: p2str, arr: plist, index: 0 });
/**
message => is the sent message
exec => is a function that works on the values in arr[index] to give a text
arr => array of data
index => start index
**/
```
## Complex music module
Melbot.js comes with a complex music module which spawns new instances of itself and manages the music overload. This makes sure that you have maximum performance always 
