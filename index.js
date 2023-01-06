let sdk = require("@stackblitz/sdk");

function start() {
  // Embeds a project and keeps track of the VM
  const vm = sdk.embedProjectId("embed", "react-ts");

  // Performs an action with VM
  const deps = vm.getDependencies();
  vm.applyFsDiff({
    create: {
      "hello.txt": "Hello, this is a new file!",
      "deps.txt": JSON.stringify(deps, null, 2),
    },
    destroy: [],
  });
}

module.exports = { start };
