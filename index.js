const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const Monitor = require('ping-monitor');
const monitor = new Monitor({
    address: '127.0.0.1',
    port: 5000, 
    interval: 10, 
  config: {
    intervalUnits: 'seconds'
  },
    httpOptions: {
      path: '/users',
      method: 'post',
      query: {
        first_name: 'Priyansh',
        last_name: 'Rajput'
      },
      body: 'Hello World!'
    },
    expect: {
      statusCode: 200
    }
});

monitor.on('up', (res) => logger(`${res.address}:${res.port} IS  ONLINE!!`, "[ UPTIME BY PRIYANSH ]"));
monitor.on('down', (res) => console.log(`${res.address} ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website}`) );
monitor.on('error', (error) => console.log(error));
monitor.on('up', (res) => logger(`Credit: Priyansh`, "[ File Owner ]"));
monitor.on('up', (res) => logger(`I hope you have a good day today idol btw thanks for using my file bot idol`, "[ PRIYANSH ]"));

const express = require('express');
const app = express();

const port = process.env.PORT || 5000
// const port = 5000
     
app.listen(port, () =>
	logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      


logger("Opened server site...", "[ Starting ]");
logger("Opening Uptime Monitor by Priyansh ...", "[ Starting ]")

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Priyansh.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

  // child.on("close",async (codeExit) => {
  //     var x = 'codeExit'.replace('codeExit',codeExit);
  //       if (codeExit == 1) return startBot("Restarting...");
  //        else if (x.indexOf(2) == 0) {
  //          await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
  //                startBot("Open ...");
  //      }
  //        else return; 
  //   });
  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Starting up...");
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/priyanshu192/bot/main/package.json").then((res) => {
  logger(res['data']['name'], "[ NAME ]");
  logger("Version: " + res['data']['version'], "[ VERSION ]");
  logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();

app.get('/', (req, res) => 
res.sendFile(__dirname+'/index.html'))