const express = require('express');
const clc = require("cli-color");
const fs = require("fs");
const path = require('path');
const app = express();
const stringlength = 69;
module.exports = async (client) => {
  let port = client.config.source.port;
  app.use(express.static("public"));
  app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`<iframe style="margin: 0; padding: 0;" width="100%" height="100%" src="https://plugboosts.vercel.app" frameborder="0" allowfullscreen></iframe>`);
    res.end()
  });

  const listener = app.listen(port, () => {
    console.log("\n" +
      clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`) + `\n` +
      clc.yellowBright(`     ┃ ` + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃") + `\n` +
      clc.yellowBright(`     ┃ ` + clc.greenBright(`         /--/  24/7 KeepAlive Server is online!  /--/`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `         /--/  24/7 KeepAlive Server is online!  /--/`.length) + "┃") + `\n` +
      clc.yellowBright(`     ┃ ` + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃") + `\n` +
      clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`) + `\n`
    )
    console.log("\n" +
      clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`) + `\n` +
      clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃") + `\n` +
      clc.yellowBright(`     ┃ `) + clc.greenBright(`          Your app listening at ${clc.cyanBright("http://localhost:" + port || listener.address().port)}  `) + " ".repeat(-1 + stringlength - ` ┃ `.length - `            Your app listening at ${"http://localhost:" + port || listener.address().port}`.length) + clc.yellowBright("┃") + `\n` +
      clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃") + `\n` +
      clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`) + `\n`
    )
  });

  app.get('/transcript/:guildId/:channelId', async (req, res) => {
    const { guildId, channelId } = req.params;
    const file = path.resolve(__dirname, `../transcript/${guildId}/${channelId}.html`)
    if (fs.existsSync(file)) {
      res.sendFile(file);
    } else {
      res.redirect('/');
    }
  });
}
