import { Presets, SingleBar } from 'cli-progress';

let progressValue = 0;
const progressBar = new SingleBar({
  format: '|' + '{bar}' + '| {percentage}%',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
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
  progressValue = 100;
  progressBar.update(progressValue);
  progressBar.stop();
}