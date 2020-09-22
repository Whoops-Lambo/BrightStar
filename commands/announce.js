if (command === "announce" && botConfigs.plugins[18].activated === true) {
        const messageArray = message.content.split(/ +/g)
        let id = args[0].slice(2, -1)
        var embed_channel = message.guild.channels.find(ch => ch.id == id)
    
        let embed_color = args[1]
        let embed_title = args[2]
        let embed_desc = messageArray.slice(4).join(` `)
    
        const AnnounceEmbed = new Discord.RichEmbed()
            .setTitle(embed_title)
            .setColor(embed_color)
            .setDescription(embed_desc)
        if (!embed_channel) return message.channel.send(`Sorry, either that's an invalid channel or it isn't a channel at all. Please redo your command!`)

            message.channel.send(`Are you sure you would like to send an announcement with the following information?`).then((msgx) => {
                message.channel.send({embed: {
                    color: 183356,
                    description: `Title: **${args[2]}**\n` +
                                 `Color: **${args[1]}**\n` +
                                 `Description: **${embed_desc}**\n` +
                                 `Channel: ${embed_channel}`
                }}).then(awaitResponse => {
                    message.channel.awaitMessages(response => response.author.id === message.author.id, {
                        /* Above line matches original message author ID with the new message author ID. */
                        max: 1,
                        time: 15000,
                        error: ['time'],
                    }).then((collectedResponse) => {
                        /* If the user wants to send the announcement, they say yes */
                        if (collectedResponse.first().content === `yes` || collectedResponse.first().content === `Yes`) {
                            //embed_channel.send(`@everyone`)
                            embed_channel.send(AnnounceEmbed);
            
                            message.delete()
                            msgx.delete()
                            collectedResponse.first().delete()
                            awaitResponse.delete()
    
                            message.channel.send(`Successfully sent announcement!`).then(announceconfirm => {
                                announceconfirm.delete(3000)
                            })
                        }
                        /* If the user wants to send the announcement, they say yes */

                        /* If the user does not want to send the announcement, they say no */
                        if (collectedResponse.first().content === `no` || collectedResponse.first().content === `No`) {
                            message.channel.send(`Cancelled action.`).then(cancelaction => {
    
                                cancelaction.delete()
                                message.delete()
                                msgx.delete()
                                collectedResponse.first().delete()
                                awaitResponse.delete()

                                message.channel.send(`Announcement cancelled.`).then(announceconfirm => {
                                    announceconfirm.delete(3000)
                                })
                            })            
                        }
                        /* If the user does not want to send the announcement, they say no */
                    })
                })
            })
    }
