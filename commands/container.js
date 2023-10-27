const { Command } = require("commander");
const Container = new Command("container")
  .description("Manage containers");

const { start } = require("../handlers/container/startContainer.js");
const { pause } = require("../handlers/container/pauseContainer.js");
const { unpause } = require("../handlers/container/unpauseContainer.js");
const { rename } = require("../handlers/container/renameContainer.js");
const { restart } = require("../handlers/container/restartContainer.js");
const { remove } = require("../handlers/container/removeContainer.js");
const { inspect } = require("../handlers/container/inspectContainer.js");
const { stats } = require("../handlers/container/getContainerStats.js");
const { changes } = require("../handlers/container/getChangesOnFilesystem.js");
const { exporting } = require("../handlers/container/exportContainer.js");
const { create } = require("../handlers/container/createContainer.js");
const { logs } = require("../handlers/container/containerLogs.js");
const { processes } = require("../handlers/container/listProccesses.js");
const { update } = require("../handlers/container/updateContainer.js");
const { stop } = require("../handlers/container/stopContainer.js");
const { execute } = require("../handlers/container/executeCommand.js");

// Add commands dynamically
Container.addCommand(
  new Command("stats")
    .argument("<container>")
    .description("Get stats")
    .action((container) => {
      stats(container);
    })
);

Container.addCommand(
  new Command("start")
    .argument("<container>")
    .description("Start a container")
    .action((container) => {
      start(container);
    })
);

Container.addCommand(
  new Command("pause")
    .argument("<container>")
    .description("Pause a container")
    .action((container) => {
      pause(container);
    })
);

Container.addCommand(
  new Command("unpause")
    .argument("<container>")
    .description("Unpause a container")
    .action((container) => {
      unpause(container);
    })
);

Container.addCommand(
  new Command("rename")
    .argument("<container>")
    .description("Rename a container")
    .action((container) => {
      rename(container);
    })
);

Container.addCommand(
  new Command("restart")
    .argument("<container>")
    .description("Restart a container")
    .action((container) => {
      restart(container);
    })
);

Container.addCommand(
  new Command("remove")
    .argument("<container>")
    .description("Remove a container")
    .action((container) => {
      remove(container);
    })
);

Container.addCommand(
  new Command("inspect")
    .argument("<container>")
    .description("Inspect a container")
    .action((container) => {
      inspect(container);
    })
);

Container.addCommand(
  new Command("changes")
    .argument("<container>")
    .description("Get changes on the filesystem of a container")
    .action(changes)
);
Container.addCommand(
  new Command("exporting")
    .argument("<container>")
    .description("Export a container")
    .action(exporting)
);
Container.addCommand(
  new Command("create")
    .description("Create a container new from a given image")
    .option("--name <name>", "Specify a name for the container")
    .option(
      "--dir <path/to/dir>",
      "Specify the working directory for the container"
    )
    .option("--port <port>", "Specify the port")
    .option(
      '--env <["foo":"bar", "foo2":"bar2"]>',
      "Specify environment variables",
      (value, previous) => previous.concat([value]),
      []
    )
    .option("--user <root>", "Specify the user inside the container")
    .option(
      "--hostname <hostname>",
      "Specify the hostname inside the container"
    )
    .option("--image <ubuntu:latest>", "Specify the image name")
    .option(
      "--cmd <commands...>",
      "Specify commands to execute",
      (value, previous) => previous.concat([value]),
      []
    )
    .option("--volume <path/to/volume>", "Use volume with the given path")
    .action((options) => {
      create(options);
    })
);
Container.addCommand(
  new Command("logs")
    .argument("<container>")
    .description("Get logs of a container")
    .action((container) => {
      logs(container);
    })
);

Container.addCommand(
  new Command("processes")
    .argument("<container>")
    .description("List processes in a container")
    .action((container) => {
      processes(container);
    })
);

Container.addCommand(
  new Command("update")
    .argument("<container>")
    .description("Update a container")
    .action((container) => {
      update(container);
    })
);

Container.addCommand(
  new Command("stop")
    .argument("<container>")
    .description("Stop a running container")
    .action((container) => {
      stop(container);
    })
);

Container.addCommand(
  new Command("execute")
    .argument("<container>")
    .description("Execute a command in a container")
    .action((container) => {
      execute(container);
    })
);

module.exports = Container;
