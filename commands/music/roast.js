module.exports = {
  name: "roast",
  aliases: ["ros"],
  category: "Music",
  utilisation: "{prefix}roast [name]",

  execute(client, message, args) {
    if (!args[0])
      return message.channel.send(
        `${client.emotes.error} - hvem skal jeg riste for dig brorz?`
      );

    var personToRoast = args[0];

    var insults = [
      "du er så grim, man skulle tro din mor havde haft en affære med en hest.",
      "du er så grim at din mor stadig giver kvajebajere på sygehuset.",
      "du er så grim, at du er nødt til, at snige dig ind på et glas vand for at drikke det",
      "du er så grim, at din mor var nødt til at fodre dig med en slangebøsse, da du var lille.",
      "du er så fed, at din blodtype er nutella.",
      "du er så fed at du har dit eget postnummer.",
      "du var så grim, som lille, at din mor måtte hænge en kotelet om halsen på dig før hunden gad at lege med dig.",
      "du er så fed, at hvis du ligger på stranden kommer Greenpeace og ruller dig i vandet.",
      "du er så dum at du ikke engang kan spille lort i en cowboy film.",
      "du var så grim, som lille, at din mor stadig giver kvaje-bajere på fødeafdelingen.",
      "du var så grim, som lille, at dine forældre måtte leje et barn til at spille dig på hjemmevideoerne.",
      "du er så grim, at din fødselsattest er en undskyldning fra kondomfirmaet.",
      "du er så grim, at din skygge har sagt op.",
      "du er så grim, at du gør blinde børn bange.",
      "du er så fed, at du må købe tamponer i Tæppeland.",
      "du er så dum, at du falder over trådløst internet.",
      "du er så dum, at du ikke kan finde rundt i en telefonboks.",
      "du er så fed, at du får syet kjoler samme sted som Cirkus Benneweiss får syet cirkustelt.",
    ];

    var insultNumber = Math.random() * (insults.length - 0) + 1;
    var roundedNumber = Math.floor(insultNumber);

    message.channel.send(args.join(" ") + `, ` + insults[roundedNumber]);

    client.player.play(message, "SHEESH SOUND EFFECT", { firstResult: true });
  },
};
