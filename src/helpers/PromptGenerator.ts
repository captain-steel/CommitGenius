export function generate(repoChanges: string, mood: string = 'pro') {
  let changes = 'Generate a concise commit message in the Conventional Commits format for the following repository changes.\n\n';

  changes += 'Format the message as:\n';
  changes += 'Type(scope): Description\n\n';

  changes += 'Key Points:\n';
  changes += '- Summarize the change succinctly.\n';
  changes += '- Use imperative, present tense (e.g., "change" not "changed" or "changes").\n';
  changes += '- Scope is optional and refers to the section of the codebase affected.\n';
  changes += '- Exclude metadata like "co-authored-by", "reviewed-by" or "refs".\n\n';

  if (mood === 'funny') {
      changes += 'Style: Engaging, with a touch of humor.\n\n';
  } else if (mood === 'pro') {
      changes += 'Style: Professional, clear, and to-the-point.\n\n';
  }

  changes += 'Changes:\n';
  changes += repoChanges.trim();

  return changes;
}
