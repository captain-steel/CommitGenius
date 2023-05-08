export function generate(repoChanges: string, mood: string = 'pro') {
  let changes = 'Please generate a commit message in the Conventional Commits format based on the following git changes.\n\n';

  changes += 'The commit message should be structured as follows:\n';
  changes += '<type>[optional scope]: <description>\n';
  changes += '[optional body]\n';
  changes += '[optional footer(s)]\n\n';

  changes += 'Break the line after a meaningful phrase or sentence.\n';
  changes += 'The lines do not need to be uniform in their length.\n';
  changes += 'Do not include "co-authored-by", "reviewed-by" or "refs" in the message.\n\n';

  if (mood === 'funny') {
    changes += 'Make the message funny and engaging while adhering to the Conventional Commits format.\n';
  } else if (mood === 'pro') {
    changes += 'Keep the message professional and concise, following the Conventional Commits format.\n';
  }

  changes += '\nRepository changes are:\n';
  changes += repoChanges;

  return changes;
}
