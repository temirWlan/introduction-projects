function consoleToJSON() {
  const data = {};
  const arr = process.argv.slice(2);
  
  for (let i = 0; i < arr.length; i++) {
    const arg = arr[i].split('=');
    data[arg[0]] = arg[1] ? arg[1] : true;
  }

  return data;
}

console.log(consoleToJSON());