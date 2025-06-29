export const useTimeArray = (): string[] => {
  const timeArray: string[] = [];
  for (let i = 1; i < 25; i++) {
    const now: Date = new Date();
    now.setHours(now.getHours() + i);
    now.setMinutes(0);

    const hourFormatted = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    timeArray.push(hourFormatted);
  }
  return timeArray;
};
