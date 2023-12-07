const clc = require("cli-color");
const Discord = require('discord.js');
module.exports = async (client) => {
      let i = 0;
      setInterval(() => {
        let activities = [
          { name: `${client.guilds.cache.size} Servers`, type: 2 },
          { name: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users`, type: 3 },
        ];
        if (i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
      }, 5000);

  try {
    const stringlength = 69;
    console.log("\n")
    console.log(clc.greenBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.greenBright(`     ┃ ` + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃"))
    console.log(clc.greenBright(`     ┃                    ` + clc.blueBright(`Discord Bot is online!`) + " ".repeat(-20 + stringlength - ` ┃ `.length - `Discord Bot is online!`.length) + "┃"))
    console.log(clc.greenBright(`     ┃           ` + ` /--/ ${clc.cyanBright(client.user.tag)} Is Now Online :) /--/ ` + " ".repeat(-1 + stringlength - ` ┃ `.length - ` /--/ ${clc.cyanBright(client.user.tag)} Is Now Online :) /--/ `.length) + "┃"))
    console.log(clc.greenBright(`     ┃ ` + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃"))
    console.log(clc.greenBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
    client.logger(
      clc.blueBright(`Working Guilds: `) + clc.greenBright(`${client.guilds.cache.size} Servers`) + `\n` +
      clc.blueBright(`Watching Users: `) + clc.greenBright(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}  Users`) + `\n` +
      clc.blueBright(`Commands: `) + clc.greenBright(`${client.commands.size}`) + `\n` +
      clc.blueBright(`Source: `) + clc.greenBright(`v${require(`${process.cwd()}/package.json`).version}`) + `\n` +
      clc.blueBright(`Discord.js: `) + clc.greenBright(`v${Discord.version}`) + `\n` +
      clc.blueBright(`Node.js: `) + clc.greenBright(`${process.version}`) + `\n` +
      clc.blueBright(`Plattform: `) + clc.greenBright(`${process.platform} ${process.arch}`) + `\n` +
      clc.blueBright(`Memory: `) + clc.greenBright(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
    );
  } catch { /* */ }
}
