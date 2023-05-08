#!/usr/bin/env node

import dotenv from 'dotenv';
import * as path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getChanges } from './clients/GitClient';
import { callGpt } from './clients/GptClient';
import { generate } from './helpers/PromptGenerator';

dotenv.config();

(async () => {
  const argv: Args = await yargs(hideBin(process.argv))
    .option('repo', {
      alias: 'r',
      type: 'string',
      description: 'Relative path of the git repository'
    })
    .option('mood', {
      alias: 'm',
      type: 'string',
      description: 'Mood of the commit (pro or funny)',
      choices: ['funny', 'pro'],
      default: 'pro'
    })
    .help()
    .version()
    .parse();

  // Grab the --repo argument passed in to the script
  // If the argument exists, use that path, otherwise use the current directory
  const repo = argv.repo ? path.resolve(argv.repo) : path.resolve('.');

  // Get the changes from the repository
  // If there are any changes:
  //   - Generate a prompt based on those changes
  //   - Call the GPT API using that prompt
  //   - Print the result
  // If there are no changes, print a message to the console
  const repoChanges = await getChanges(repo);
  if (repoChanges && repoChanges.length > 0) {
    const prompt = generate(repoChanges, argv.mood);
    const result = await callGpt(prompt);
    if (result.success === true) {
      console.log(result.message);
    } else {
      console.error(result.error_message);
    }
  } else {
    console.log('No changes are found');
  }
})();
