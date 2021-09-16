/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "mirror",
	description: "Watergirl's Status",
	async run(message, args, client) {
        const msg = message.channel.send('Mirror, Mirror on the wall. Who is the flattest of them all?')
        const reply = message.channel.send('Why that is Watergirl of course!')
    }
});
