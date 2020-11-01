const timestampToString = (timestamp: number): string => {
  const date = new Date(timestamp);
  const timeString = `${date.getHours() + 1}:${date.getMinutes()}`;
  const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return `${timeString} - ${dateString}`;
};

export { timestampToString };
