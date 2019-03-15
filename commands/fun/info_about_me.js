const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'fun',
            memberName: 'info',
            description: 'Learn about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Info", "Learn about who made me!")
            .addField("Who made this bot?", "Ricky made me for a help of this server, if you recive and error, contact me. ricky.#4477!")
            .addField("Who is Ricky?", "Ricky is 11 years old, in fact, he loves coding, he makes bot for people completly free!")
            .setThumbnail('https://cdn.discordapp.com/avatars/289851503294939138/1da42cf9cf48e1daaf682a4da8b55174.png?size=2048')
            .setColor(0x6A32BA)
            .setFooter('Thank you for reading about me!')

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoCommand;