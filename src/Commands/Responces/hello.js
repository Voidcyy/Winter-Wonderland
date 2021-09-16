/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "hello",
	description: "Says hello to the author of the message.",
	async run(message, args, client) {
        const msg = await message.reply(`Hello ${message.author.username}!`);

	}
});
