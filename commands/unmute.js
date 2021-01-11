if(command === "unmute") {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    let role = message.guild.roles.find('name', 'muted')
    //CHANGE THIS ^^
    
    if (!logchannel) return message.reply('I cannot find a logs channel');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('**Error:** You do not have the right permissions!');
                  if (reason.length < 0) return message.reply('You must supply a reason for the unmute.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
    //if (!message.guild.member(user).roles.has(role)) return message.reply('I cannot unmute that member');
    message.guild.member(user).removeRole(role);
    const embed = new Discord.RichEmbed()
    .setColor("0xFF0000")
    .setTimestamp()
    .addField('Action:', 'Unmute')
    .addField('User:', `${user.tag})`)
    .addField('Moderator:', `${message.author.tag}`)
    .addField('Reason', reason);
    message.channel.send('**UNMUTED**! I have logged the unmute in the logs channel.')
    return logchannel.send(embed);
  };
