import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/mock-api/db.json", json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Generated mock data."));
  }
});
