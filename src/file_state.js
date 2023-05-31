const fs = require('fs/promises');

async function example() {
  try {
    const stats = await fs.stat('./assets/sample.pdf');
    console.log(stats);
    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
    console.log(stats.isSymbolicLink()); // false
    console.log(stats.size); // 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}
example();

