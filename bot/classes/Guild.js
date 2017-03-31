/**
 * ----------------------Guilding---------------------------
 * Guilding is a new concept of storing data for a particular guild. A collection of guildings will be used by the guild manager
 * Add more options if you want to extend the list of guild based list of something.
 * Note that these should be data accessible through discord only 
 * and no permanent data should be stored here since it will get reset on restart
 * We will be using it to make our bot do complex music operations
 * 
 */
module.exports = class Guild {
    constructor(guild) {
        this.id = guild.id;
        /**
         * voice_channel stores voice channel for that guild
         */
        this.voice_channel = guild.channels.filter('type', 'voice').find((c) => {
            let cn = c.name.toLowerCase();
            if (cn.includes("music") || cn.includes("voice"))
                return c;
        });
        /**
         * text_channel stores text channel which issues music commands
         */
        this.text_channel = guild.channels.filter('type', 'text').find((c) => {
            let cn = c.name.toLowerCase();
            if (cn.includes("voice") || cn.includes("music"))
                return c;
        });
        this.voice_handler = null;
        this.voice_connection = null;
        this.stopped = true;
        this.inform_np = true;
        this.queue = [];
    };

}