/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "watergirl",
	description: "Real photo of watergirl",
	async run(message, args, client) {
        const msg = await message.channel.send({
            files: [{
                attachment: 'C:/Users/Shade/Documents/Winter Wonderland/Discord/src/Images/watergirl.png',
                name: 'watergirl.png'
            }]
        })
    }
});
