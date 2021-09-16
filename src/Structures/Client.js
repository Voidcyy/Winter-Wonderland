/** @format */

const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Event.js");

const config = require("../Data/config.json");

const intents = new Discord.Intents(32767);

const fs = require("fs");

class Client extends Discord.Client {
	constructor() {
		super({ intents });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {
		fs.readdirSync("./src/Commands/Admin")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Admin/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Client")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Client/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Economy")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Economy/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Embeds")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Embeds/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Levels")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Levels/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Music")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Music/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

			fs.readdirSync("./src/Commands/Owner")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Owner/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});

		fs.readdirSync("./src/Commands/Responces")
		.filter(file => file.endsWith(".js"))
		.forEach(file => {
			
			/**
			 * @type {Command}
			 */
			const command = require(`../Commands/Responces/${file}`);
			console.log(`Command ${command.name} loaded`);
			this.commands.set(command.name, command);
		});

		fs.readdirSync("./src/Commands/Users")
		.filter(file => file.endsWith(".js"))
		.forEach(file => {
			
			/**
			 * @type {Command}
			 */
			const command = require(`../Commands/Users/${file}`);
			console.log(`Command ${command.name} loaded`);
			this.commands.set(command.name, command);
		});

		fs.readdirSync("./src/Commands/Voice")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				
				/**
				 * @type {Command}
				 */
				const command = require(`../Commands/Voice/${file}`);
				console.log(`Command ${command.name} loaded`);
				this.commands.set(command.name, command);
			});


		fs.readdirSync("./src/Events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(`Event ${event.event} loaded`);
				this.on(event.event, event.run.bind(null, this));
			});

		this.login(token);
	}
}

module.exports = Client;
