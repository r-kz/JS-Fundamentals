const args = process.argv.slice(2);

// We cannot use length, so check if args[0] is undefined
if (args[0] === undefined) {
  console.log('No argument');
} else {
  console.log(args[0]);
}