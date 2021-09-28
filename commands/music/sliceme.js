module.exports = {
  name: "sliceme",
  aliases: ["sm"],
  category: "Music",
  utilisation: "{prefix}sliceme",

  execute(client, message, args) {
    message.channel.send(`So ya wanna get sliced tf up mate?`);
    client.player.play(message, "Fancy - Slice me nice", { firstResult: true });
    message.channel.send(`Well here u fucking go niggah. Enjoy`);
  },
};
