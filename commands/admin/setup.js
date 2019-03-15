const commando = require('discord.js-commando');
const discord = require('discord.js');

class SetupCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'setup',
            group: 'admin',
            memberName: 'setup',
            description: 'Tells you about the setup.'
        });
    }

    async run(message, args)
    {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to use this command!')
        
        var mySetup = new discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle('Setup')
            .addField('Instructions', 'Hello, thank you for getting this bot to protect your server! Please follow the steps to get this bot working.')
            .addBlankField()
            .addBlankField()
            .setThumbnail('https://cdn.discordapp.com/avatars/289851503294939138/5e5e06f1c57975880d2d0fe5330afbe3.png?size=2048')
            .addField('Description', 'Lets get this bot working, first, follow the steps below!')
            .addBlankField()
            .addField('Step 1:', 'Give this bot a role first.', true)
            .addField('Step 2:', 'Make sure it has (Adminastrator) and (Embed Links) to ban and kick.', true)
            .addField('Step 3:', 'Create a channel called (welcome-goodbye) in order for the welcome and leave messages to work. Also, make a channel called logs for the repots/bans/kicks to come in.', true)
            .addField('Step 4:', 'You can seperate the role or if you have a set of bots in a role, take me there!', true)
            .setTimestamp()
            .setFooter('Thanks for reading the setup!');

        message.channel.sendEmbed(mySetup);
    }
}

module.exports = SetupCommand;