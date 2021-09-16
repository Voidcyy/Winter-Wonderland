/** @format */

const Command = require("../../Structures/Command.js");

const clientOwner = '793166184303951942'

module.exports = new Command({
	name: "test",
	description: "This is a test command",
	async run(message, args, client) {
        console.log('Can read commands');
    }
});
