const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (!args[0] || isNaN(x) || x < 0) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}