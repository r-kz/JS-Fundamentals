const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (!args[0] || isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
