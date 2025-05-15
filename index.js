// bot life starts here
const Discord = require("discord.js")
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN); // via secret

// when the bot is active, this happens
client.on("ready", () => {
  console.log(`> connected to ${client.user.tag}`)
})

// when someone sends a message...
client.on("message", msg => {
  const message = msg
  const args = message.content.split(" ");
  const prefix = "Calculawhat's";

  // return if not a user, not in server, not w/ prefix
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  // stoppage
  if (args.length < 4) {
    message.reply("I can't work with that... (give me more arguments!)")
    return;
  }
  if (args.length > 4) {
    message.reply("I can't work with that... (give me less arguments!)")
    return;
  }

  // calculations
  const num1 = parseInt(args[1]);
  const num2 = parseInt(args[3]);
  switch (args[2]) {
    case '+':
      message.reply("**" + num1 + "** + **" + num2 + "** = **" + (num1 + num2) + "**!")
      return;
    case '-':
      message.reply("**" + num1 + "** - **" + num2 + "** = **" + (num1 - num2) + "**!")
      return;
    case '*':
      message.reply("**" + num1 + "** * **" + num2 + "** = **" + (num1 * num2) + "**!")
      return;
    case '/':
      if (num2 == "0") {
        message.reply("**" + num1 + "** / **0** = **Indeterminate**!")
      } else {
        message.reply("**" + num1 + "** / **" + num2 + "** = **" + (num1 / num2) + "**!")
      }
      return;
    case '%':
      message.reply("**" + num1 + "** % **" + num2 + "** = **" + (num1 % num2) + "**!")
      return;
    default:
      message.reply("I can't work with that... (give me a valid operation  !)")
      return;
  }
})