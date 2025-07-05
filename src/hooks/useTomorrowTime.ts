export const useTomorrowTime = () => {
  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now: Date = new Date();
  now.setHours(now.getHours() + 24);

  now.setMinutes(0);

  const formattedTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  
  const index: number = new Date().getDay();
  const tomorrowIndex: number = index === 6 ? 0 : index;

  const dayInteger: string = weekDay[tomorrowIndex]
  const result = dayInteger + ", "+formattedTime
  return result;
};
