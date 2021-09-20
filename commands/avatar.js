
if (message.content.startsWith(process.env.Prefix + "avatar")) {
      if (!message.mentions.users.size) {
        const avatarAuthor = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(message.author.username)
      .setImage(message.author.avatarURL)
        message.channel.send(avatarAuthor);
        let mention = message.mentions.members.first();
        const avatarMention = new discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(mention.user.username)
        .setImage(mention.user.avatarURL)
        message.channel.send(avatarMention);
