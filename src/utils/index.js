export const daysToMilliseconds = (days) => {
  // 👇️        hour  min  sec  ms
  return days * 24 * 60 * 60 * 1000;
};
