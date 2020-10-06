const { argv, env, platform } = require('process');

var exec = require('child_process').exec;

var action = null;
var isOSX = platform === 'darwin' || platform === 'linux';

// command to close Teams so we can relaunch will param.
var killTeamsCommand = isOSX ?
  "pkill 'Microsoft Teams'" :
  "taskkill /f /im teams.exe";

var shouldDeployTeams = false;

// check that we have valid params.
if (argv && argv.length >= 3) {
  action = argv[2];
  shouldDeployTeams = action == "deploy" && argv.length >= 4;
} else {
  console.error("Usage: {action} {deploy command}?");
}

exec(killTeamsCommand, function(err, stdout, stderr) {
  console.log("Closing Teams");

  if (shouldDeployTeams) {
    var localAppData = env.localAppData;
    var workspaceRoot = argv[3];

    // command to launch Teams with the app package command line param.
    var deployTeamsCommand = isOSX ?
      "open -a 'Microsoft Teams' --args '--installAppPackage=" + workspaceRoot + "/.publish/Development.zip'" : 
      localAppData + '/Microsoft/Teams/Update.exe --processStart "teams.exe" --process-start-args "--installAppPackage=""' + workspaceRoot + '/.publish/Development.zip"""';
    
      console.log(deployTeamsCommand);

      setTimeout(() => {
        exec(deployTeamsCommand, (e, out, err) => {
          if (out) console.log(out);
          if (err) console.error(err);
          console.log("Launching Teams to deploy app package.");
        });   
      }, 3000);
  }
});