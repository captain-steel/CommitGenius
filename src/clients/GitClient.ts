import simpleGit from 'simple-git';

export async function getChanges(repoPath: string): Promise<string> {
  const git = simpleGit(repoPath);
  const changes = await git.diff(['--', ':(exclude)yarn.lock', ':(exclude)package-lock.json']);
  return changes;
}
