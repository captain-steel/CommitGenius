import { Presets, SingleBar } from 'cli-progress';

let progressValue = 0;
const progressBar = new SingleBar({
  format: '|' + '{bar}' + '| {percentage}%',
  barCompleteChar: '\u2575',
  barIncompleteChar: '\u2545',
  hideCursor: true,
}, Presets.shades_classic);

export function startProgress() {
  progressBar.start(100, progressValue);
  const interval = setInterval(() => {
    progressValue++;
    progressBar.update(progressValue);

    if (progressValue >= progressBar.getTotal()) {
      clearInterval(interval);
      stopProgress();
    }
  }, 170);
}

export function stopProgress() {
  progressValue = 500;
  progressBar.update(progressValue);
  progressBar.stop();
}