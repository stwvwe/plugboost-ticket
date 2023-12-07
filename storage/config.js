require('dotenv').config()
module.exports = {
  source: {
    website: {
      support: "https://discord.gg/plugboosts",
      domain: process.env.URL || ""//you need get your repl.co link in replit with keepAlive code, then replace the link
    },
    anti_crash: true,//turn on or off the antiCrash file
    keep_alive: true,//turn on or off the keepAlive file
    port: 1528,//don't need to touch or changed
    client_id: process.env.CLIENT_ID,//bot client id, you can get it in discord server or in discord developer portal
  },
  discord: {
    token: process.env.TOKEN,
    invite: `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot+applications.commands&permissions=2080374975`,
    server_support: "https://discord.gg/uoaio",
    server_id: "277354759449739264",
    server_channel_report: "1041589448523128874",
    server_channel_status: "1041589448523128874",
  },
  owner: [
    '1149010158379343963'
  ],
  whitelist_guilds: [
    '277354759449739264'
  ],
};