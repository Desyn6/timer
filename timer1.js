const intervals = process.argv.slice(2);

intervals.forEach(x => {
  if (Number(x) && Number(x) >= 0) {
    setTimeout(() => process.stdout.write('\x07'), x * 1000);
  }
});