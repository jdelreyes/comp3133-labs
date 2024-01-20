const fs = require('fs');
const csv = require('csv-parser');

// Function to filter and write data to a file
function filterAndWrite(country, inputFileName, outputFileName) {
  const outputStream = fs.createWriteStream(outputFileName);

  let headerWritten = false;

  fs.createReadStream(inputFileName)
    .pipe(csv())
    .on('data', (row) => {
      if (row.country.toLowerCase() === country.toLowerCase()) {
        if (!headerWritten) {
          outputStream.write(`country,year,population\n`);
          headerWritten = true;
        }
        outputStream.write(`${row.country},${row.year},${row.population}\n`);
      }
    })
    .on('end', () => {
      outputStream.end();
      console.log(`Processed data for ${country} and wrote to ${outputFileName}`);
    });
}

// Delete existing files if they exist
['canada.txt', 'usa.txt'].forEach((fileName) => {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
    console.log(`${fileName} deleted`);
  }
});

// Filter and write data for Canada
filterAndWrite('Canada', 'input_countries.csv', 'canada.txt');

// Filter and write data for United States
filterAndWrite('United States', 'input_countries.csv', 'usa.txt');
