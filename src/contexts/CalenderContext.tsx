import { createContext, useState, type ReactNode } from "react";
type CalenderProps = {
  schedule: Date | string;
  setSchedule: React.Dispatch<React.SetStateAction<Date | string>>;
};
type ProviderProp = {
  children: ReactNode;
};

export const CalenderContext = createContext<CalenderProps | undefined>(
  undefined
);

export const CalenderContextprovider = ({ children }: ProviderProp) => {
    const [schedule, setSchedule] = useState<Date | string>("");

  return (
    <CalenderContext.Provider value={{ schedule, setSchedule }}>
      {children}
    </CalenderContext.Provider>
  );
};
