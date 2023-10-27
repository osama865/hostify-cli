const { Command } = require("commander");
const dotenv = require("dotenv");
dotenv.config();
const CaaS = new Command();

// Main command: CaaS
CaaS.name("caas").description("Container-as-a-Service");

// Sub-command: Container
const Container = require("./commands/container");
CaaS.addCommand(Container);

// Sub-command: App
const appCommand = new Command("app")
  .description("Manage applications")
  .action(() => {
    console.log("Application management command");
  });

CaaS.addCommand(appCommand);

// Sub-command: Hub
const hubCommand = new Command("hub")
  .description("Manage images and repositories")
  .action(() => {
    console.log("Image and repository management command");
  });

CaaS.addCommand(hubCommand);

// ... Add more sub-commands as needed ...

// Parse command-line arguments
CaaS.parse(process.argv);
