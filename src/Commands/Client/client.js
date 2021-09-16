/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "client",
	description: "Shows client info",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Client Info")
			.setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
			)
			.setDescription(
				"This is about the client"
			)
			.setColor("BLUE")
			.setThumbnail(message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://cdn.discordapp.com/avatars/793166184303951942/8985b95c9214ab7793b10a1a4e8e9b3c.webp"
			)
			.addFields(
				{
					name: "Client Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Client name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});
