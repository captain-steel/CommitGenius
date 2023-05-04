import simpleGit from 'simple-git';

// returns a Promise that resolves to a string containing the changes in the Git repository
export async function getChanges(repoPath: string): Promise<string> {
  // Initialize a simple-git instance with the given repository path
  const git = simpleGit(repoPath);

  // Get the changes in the Git repository excluding changes in yarn.lock and package-lock.json files
  const changes = await git.diff(['--', ':(exclude)yarn.lock', ':(exclude)package-lock.json']);

  return changes;
}
