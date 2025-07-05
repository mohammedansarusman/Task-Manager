export const useTodayTime = (): string => {
    const now: Date = new Date();
    now.setHours(now.getHours() + 3); // Add 3 hours
    now.setMinutes(0);
    const formattedTime: string = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    return formattedTime;
};