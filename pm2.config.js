module.exports = {
  apps: [
    {
      name: 'is',
      script: './build/server.js',
      cwd: '/home/deployer/client/current',
      instances: 2,
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
        PORT: 9020
      }
    }
  ],

  deploy: {
    production: {
      user: 'deployer',
      host: ['192.168.10.10'],
      ref: 'origin/master',
      repo: 'git.github.com:SergeenkovMihail/is.git',
      path: '/home/deployer/client',
      'post-deploy': 'yarn && yarn build:server && pm2 startOrRestart pm2.config.js --env production'
    }
  }
};
