const Discord = require("discord.js");
const client = new Discord.Client();
const Chance = require("chance");
const chance = new Chance();
const config = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
});

var testArray = ["Mahvel","Skullgirls","SoulCal6","Tekken7","SFV","Third Strike","Second Impact","Smash","Project M"];

client.on("message", (message) => {
    if (message.content.startsWith("ping")){
        message.channel.send("pong!");
    }
    if (message.content.startsWith("rando")){
        var chosen = [];
        var i = 0;
        do {
            var option = chance.pickone(testArray);
            if (chosen.includes(option)){ continue } else{
            chosen[i] = option;
            i++;}
        } while (chosen.length < 3);
        message.channel.send(chosen[0] + "," + chosen[1] + "," + chosen[2]);
    }
});

client.login(config.token);
