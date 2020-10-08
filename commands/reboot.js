async function rebootCommand (msg) {
  await this.sendMessage(msg.channel.id, 'Restarting...');
  await this.client.disconnect({ reconnect: false });
  await this.dbClient.close();
  process.exit();
}

module.exports = {
  command: reboot,
  name: 'reboot',
  aliases: ['restart'],
  ownerOnly: true,
  description: 'Bot owner only.',
};
