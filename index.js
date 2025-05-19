import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        "message": "Enter your URL",
        "type": "input",
        "name": "url"
    }
  ])
  .then((answers) => {
      const input = answers.url;
      const qr_svg = qr.image(input);
      qr_svg.pipe(fs.createWriteStream('qr-image.png'));

      fs.writeFile('url.txt', input, (err) => {
        if (err) throw err;
        console.log('Saved user input!');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });