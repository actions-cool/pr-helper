const core = require("@actions/core");
const github = require("@actions/github");

// *************************************************************

const ALLACTIONS = [

];

// *************************************************************

async function main() {
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;

  const actions = core.getInput("actions", { required: true });

  const actionsArr = actions.split(',');
  actionsArr.forEach(item => {
    testActions(item.trim());
  });

  function testActions(action) {
    if (ALLACTIONS.includes(action)) {
      choseActions(action);
    } else {
      core.setFailed("This actions not supported!");
    }
  };

  async function choseActions(action) {

  };
};

main();