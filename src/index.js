const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      'https://coderbyte.com/api/challenges/json/age-counting'
    );
    const dataString = data.data;
    const items = dataString.split(', ');

    const pairItems = [];
    for (let i = 0; i < items.length; i += 2) {
      const pair = {
        key: items[i].split('=')[1],
        age: items[i + 1].split('=')[1],
      };
      pairItems.push(pair);
    }
    const filteredItems = pairItems.filter(({ age }) => age === '32');
    const keys = filteredItems.map((item) => item.key);
    const output = keys.join('\n') + '\n';

    fs.writeFile('output.txt', output, async (err) => {
      if (err) throw err;

      const input = fs.createReadStream('output.txt');
      const hash = crypto.createHash('sha1');

      input.on('readable', () => {
        const data = input.read();
        if (data) {
          hash.update(data);
        } else {
          console.log(hash.digest('hex'));
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
};

fetchData();
