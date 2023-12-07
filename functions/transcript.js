const Transcript = require('discord-html-transcripts');
const config = require(`${process.cwd()}/storage/config.js`);
const fs = require("fs");
const path = require("path")
module.exports = async (i) => {
  try {
    const transcriptDir = path.join(__dirname, '../transcript');
    const guildDir = path.join(transcriptDir, i.guild.id);
    const fileName = `${i.channel.id}.html`;
    const filePath = path.join(guildDir, fileName);
    let url = `${config.source.website.domain}/transcript/${i.guild.id}/${i.channel.id}`
    let file = await Transcript.createTranscript(i.channel, {
      limit: -1,
      returnType: 'string',
      filename: `TicketTranscript-${i.channel.name}.html`,
      saveImages: false,
      footerText: `Exported {number} message{s}.`,
      poweredBy: false
    })
    if (!fs.existsSync(guildDir)) {
      fs.mkdirSync(guildDir, { recursive: true });
    }
    fs.writeFileSync(filePath, file)
    return url;
  } catch (e) {
   console.log(e)
  }
}