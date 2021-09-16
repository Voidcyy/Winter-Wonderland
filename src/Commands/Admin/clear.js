/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "clear",
	description: "Clear",
	async run(message, args, client) {
        let myRole = message.guild.roles.cache.get("888087636961529877");
        if (message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES', true)) {
            if (args[1] < 1) {
                const error = message.reply('Too small of a number!')
            } else {
                const num = Number(args[1])
                const deleteNum = num + 1
                const clearthis = message.channel.bulkDelete(deleteNum)
            }
        }
    }
});
