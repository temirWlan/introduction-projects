const os = require('os');

const osData = {
  platform: os.platform(),
  cpuArchitecture: os.arch(),
  osInfo: os.cpus(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  rootDirectory: os.homedir(),
  osUptime: os.uptime()
};

console.log(osData);