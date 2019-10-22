const config = {
  apps: [
    {
      name: "ComicsMar",
      script: "./initializers/server/index.js",
      cwd: "/home/deployer/ComicsMar/current",
      instances: "max",
      exec_mode: "cluster"
    }
  ],
  deploy: {
    production: {
      user: "deployer",
      host: ["79.143.28.56"],
      ref: "origin/master",
      repo: "git@github.com:Ibadichan/ComicsMar.git",
      "post-deploy":
        "yarn install && " +
        "yarn build && " +
        "yarn build:server && " +
        "pm2 startOrRestart pm2.config.js --env production",
      path: "/home/deployer/ComicsMar",
      ssh_options: "StrictHostKeyChecking=no"
    }
  }
};

module.exports = config;
