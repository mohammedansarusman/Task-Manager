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
  const dayInteger: string = weekDay[new Date().getDay() + 1]
  const result = dayInteger + ", "+formattedTime
  return result;
};
