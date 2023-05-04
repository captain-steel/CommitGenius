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
      description: 'Relative path to the git repository'
    })
    .help()
    .version()
    .parse();

  const repo = argv.repo ? path.resolve(argv.repo) : path.resolve('.');

  const repoChanges = await getChanges(repo);
  console.log(repoChanges);

  if (repoChanges && repoChanges.length > 0) {
    const prompt = generate(repoChanges);
    const result = await callGpt(prompt);
    if (result.success === true) {
      console.log(result.message);
    } else {
      console.log(`Failed: ${result.finish_reason}`);
    }
  } else {
    console.log('No changes are found')
  }
})();
