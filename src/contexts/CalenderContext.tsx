import { createContext, useState, type ReactNode } from "react";
type CalenderProps = {
  schedule: Date | string;
  setSchedule: React.Dispatch<React.SetStateAction<Date | string>>;
  turnPopOver: boolean;
  setTurnPopOver: React.Dispatch<React.SetStateAction<boolean>>
};
type ProviderProp = {
  children: ReactNode;
};

export const CalenderContext = createContext<CalenderProps | undefined>(
  undefined
);

export const CalenderContextprovider = ({ children }: ProviderProp) => {
    const [schedule, setSchedule] = useState<Date | string>("");
    const [turnPopOver, setTurnPopOver] = useState<boolean>(false)

  return (
    <CalenderContext.Provider value={{ schedule, setSchedule, turnPopOver, setTurnPopOver }}>
      {children}
    </CalenderContext.Provider>
  );
};
