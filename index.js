const mineflayer = require("mineflayer");
let data = require("./config.json");
var lasttime = -1;
var moving = 0;
var connected = 0;
var actions = ["forward", "back", "left", "right"];
var lastaction;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
console.log(data);
const bot = mineflayer.createBot({
    host: "gecko.aternos.host",
    port: 50063,
    username: "fuck_reza",
    hideErrors: false,
});
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
bot.on("login", function () {
    console.log("Logged In");
});
bot.on("time", function () {
    if (connected < 1) {
        return;
    }
    if (lasttime < 0) {
        lasttime = bot.time.age;
    } else {
        var randomadd = Math.random() * maxrandom * 20;
        var interval = moveinterval * 20 + randomadd;
        if (bot.time.age - lasttime > interval) {
            if (moving == 1) {
                bot.setControlState(lastaction, false);
                moving = 0;
                lasttime = bot.time.age;
            } else {
                var yaw = Math.random() * Math.PI - 0.5 * Math.PI;
                var pitch = Math.random() * Math.PI - 0.5 * Math.PI;
                bot.look(yaw, pitch, false);
                lastaction =
                    actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction, true);
                moving = 1;
                lasttime = bot.time.age;
                bot.activateItem();
            }
        }
    }
});

bot.on("spawn", function () {
    connected = 1;
});

bot.on("kicked", console.log);
bot.on("error", (e) => {
    console.log(e);
    console.log("error");
});
