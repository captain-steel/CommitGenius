export function generate(repoChanges: string) {
  let changes = 'Generate a commit message based on the following git changes.\n';
  changes += "The message can be longer than one line, but it's not guaranteed.\n";
  changes += 'In that case, the first line is the title and the rest is the body.\n';
  changes += repoChanges;

  return changes;
}