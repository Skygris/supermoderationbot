const Discord = require('discord.js')
const bot = new Discord.Client ();

var prefix = ("*")

bot.on('ready' , function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDA5MTI0Njk1MTc1MzMxODUw.DVaCnA._yHfpMO7D4uaiX1nVQOMtjIk_M0");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: /n -*help)");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. =)");
        console.log("Commande Salut effectué");
    }
});
