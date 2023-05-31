const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('./assets/sample.pdf', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

