export const daysToMilliseconds = (days) => {
  // 👇️        hour  min  sec  ms
  return days * 24 * 60 * 60 * 1000;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

export const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
};

export const millisToMinutesAndSeconds = (milliseconds) => {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
