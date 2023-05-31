const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('./assets/sample.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

