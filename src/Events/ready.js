const Event = require('../Structures/Event');

module.exports = new Event('ready', (client) => {
    console.log(`${client.user.tag} is logged in!`);
})