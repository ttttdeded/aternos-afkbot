const mineflayer = require("mineflayer");
const config = require("./config.json");
let lasttime = -1;
let moving = 0;
let connected = 0;
const actions = ["forward", "back", "left", "right"];
let lastaction;
let moveinterval = 2; // 2 second movement interval
let maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
const bot = mineflayer.createBot({
    host: config.ip,
    port: config.port,
    username: "afk_bot",
    hideErrors: false,
});
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
        const randomadd = Math.random() * maxrandom * 20;
        const interval = moveinterval * 20 + randomadd;
        if (bot.time.age - lasttime > interval) {
            if (moving == 1) {
                bot.setControlState(lastaction, false);
                moving = 0;
                lasttime = bot.time.age;
            } else {
                const yaw = Math.random() * Math.PI - 0.5 * Math.PI;
                const pitch = Math.random() * Math.PI - 0.5 * Math.PI;
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
bot.on("error", console.log);
