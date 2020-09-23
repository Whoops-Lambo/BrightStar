if (command === "serverinfo" && botConfigs.plugins[6].activated == true) {
        let sicon = message.guild.iconURL;
        let sererembed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#15f153")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);

        return message.channel.send(sererembed);
    }
