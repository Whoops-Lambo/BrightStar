if (command === "purge" && botConfigs.plugins[0].activated == true) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission!");
        const deleteCount = parseInt(args[0], 10);

        let embed = new Discord.RichEmbed()
            .setDescription("~Purge~")
            .setColor("#e56b00")
            .addField("Messages: ", `${deleteCount}`)
            .addField("Purged By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Purged In", message.channel)
            .addField("Time", message.createdAt);

        //let channel = message.guild.channels.find(`name`, "logs");
        let channel = message.guild.channels.find(ch => ch.name === 'logs');
        if (!channel) {
            message.channel.send("Can't find a 'logs' channel.");
            return;
        }

        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            message.channel.send("Example: " + prefix + "purge 10");
            message.channel.send("Please enter a number between 2 and 100");
            return;
        }

        const fetched = await message.channel.fetchMessages({ limit: deleteCount });
        channel.send(embed);
        message.channel
            .bulkDelete(fetched)
            .catch(error => message.reply("Error. Contact an administrator."));
    }
