if (command === "kick" && botConfigs.plugins[2].activated == true) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission!");
        if (kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked")


        let kEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#bc0000")
            .addField("Kicked User", `${kUser}`)
            .addField("Kicked By", `<@${message.author.id}>`)
            .addField("Kicked In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);

        //let incidentchannel = message.guild.channels.find(`name`, "logs");
        let channel = message.guild.channels.find(ch => ch.name === 'logs');
        if (!channel) {
            message.channel.send("Can't find a 'logs' channel.");
            return;
        }

        message.guild.member(mUser).kick(kReason);
        channel.send(kEmbed);
    }
