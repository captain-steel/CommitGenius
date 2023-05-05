export function generate(repoChanges: string, mood: string = 'pro') {
  let changes = 'Please generate a commit message in the Conventional Commits format based on the following git changes.\n';
  changes += 'The Conventional Commits format is: <type>(<scope>): <subject> (https://www.conventionalcommits.org/).\n';
  changes += "The message can be longer than one line, but it's not guaranteed.\n";
  changes += 'In that case, the first line is the title and the rest is the body.\n';
  changes += 'Please do not generate empty lines in the message.\n';
  changes += 'Break the line after a meaningful phrase or sentence.\n';
  changes += 'Lines do not have to be uniform in length.\n';
  changes += 'Do not include "co-authored-by" in the message.\n';

  if (mood === 'funny') {
    changes += 'Make the message funny and engaging while adhering to the Conventional Commits format.\n';
  } else if (mood === 'pro') {
    changes += 'Keep the message professional and concise, following the Conventional Commits format.\n';
  }

  changes += 'Git changes:\n';
  changes += repoChanges;

  return changes;
}
