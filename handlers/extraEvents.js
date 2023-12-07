const moment = require("moment");
const clc = require("cli-color");

module.exports = async (client) => {
client.logger = (data) => {
    let logstring = clc.greenBright(`@`+`u`+`oa`+`io`) + clc.blackBright(` | `) + clc.cyanBright(`${moment().format("ddd DD-MM-YYYY")}`) + clc.magenta(` 〢 `);
    if (typeof data == "string") {
      console.log(logstring, data.split("\n").map(d => clc.green(`${d}`)).join(`\n${logstring} `))
    } else if (typeof data == "object") {
      console.log(logstring, clc.green(JSON.stringify(data, null, 3)))
    } else if (typeof data == "boolean") {
      console.log(logstring, clc.cyan(data))
    } else {
      console.log(logstring, data)
    }
  };
}
