/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "shutdown",
	description: "Shutsdown the discord bot (Owner Only)",
	async run(message, args, client) {
        if (message.author.id === clientOwner) {
            const msg = await message.reply(`${client.user.tag} is logging out!`);
            const logout = await client.destroy();
        } else {
            const notOwner = await message.reply('You\'re not the owner of the client!');
        }
	}
});
