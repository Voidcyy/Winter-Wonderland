/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "rock",
	description: "The rock eating pancakes",
	async run(message, args, client) {
        const msg = await message.channel.send({
            files: [{
                attachment: 'C:/Users/Shade/Documents/Winter Wonderland/Discord/src/Images/rock.png',
                name: 'rock.png'
            }]
        })
    }
});
