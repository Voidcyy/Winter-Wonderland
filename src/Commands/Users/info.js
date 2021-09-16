/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "info",
	description: "Shows client info",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();
        const userid = message.mentions.users.first().id;
        const username = message.mentions.users.first().username;
        const usercreated = message.mentions.users.first().createdAt.toString();
        const useravatar = message.mentions.users.first().avatarURL({ dynamic: true });
        const usertag = message.mentions.users.first().tag;
		if (userid !== '691779905482129521') {
			embed
				.setTitle(`${username} Info`)
				.setAuthor(
					username,
					useravatar,
				)
				.setDescription(
					"This is info about the user"
				)
				.setColor("BLUE")
				.setThumbnail(useravatar)
				.setTimestamp(message.createdTimestamp)

				.addFields(
					{
						name: "Created Account",
						value: usercreated,
						inline: true
					},
					{
						name: "ID",
						value: userid,
						inline: true
					},
					{
						name: "Username",
						value: username,
						inline: true
					},
					{
						name: "User",
						value: usertag,
						inline: true
					}
				);

			message.reply({ embeds: [embed] });
		} else {
			const tooflat = message.reply("That user is too flat can't process data!")
		}
	}
});
