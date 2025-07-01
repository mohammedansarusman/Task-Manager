import { createContext, useState, type ReactNode } from "react";
type Task = {
  task: string;
  dueDate: Date;
}
type CalenderProps = {
  schedule: Date | string;
  setSchedule: React.Dispatch<React.SetStateAction<Date | string>>;
  turnPopOver: boolean;
  setTurnPopOver: React.Dispatch<React.SetStateAction<boolean>>;
  reminder: Date | string;
  setReminder: React.Dispatch<React.SetStateAction<Date | string>>;
  hour: string;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  reminderPop: boolean;
  setReminderPop: React.Dispatch<React.SetStateAction<boolean>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
  taskStore: Task[];
  setTaskStore: React.Dispatch<React.SetStateAction<Task[]>>
};
type ProviderProp = {
  children: ReactNode;
};

export const CalenderContext = createContext<CalenderProps | undefined>(
  undefined
);

export const CalenderContextprovider = ({ children }: ProviderProp) => {
  const [schedule, setSchedule] = useState<Date | string>("");
  const [turnPopOver, setTurnPopOver] = useState<boolean>(false);
  const [reminder, setReminder] = useState<Date | string>("");
  const [hour, setHour] = useState<string>("");
  const [reminderPop, setReminderPop] = useState<boolean>(false);
  const [task,setTask] = useState<string>("")
  const [taskStore, setTaskStore] = useState<Task[]>([])

  return (
    <CalenderContext.Provider
      value={{
        schedule,
        setSchedule,
        turnPopOver,
        setTurnPopOver,
        reminder,
        setReminder,
        hour,
        setHour,
        reminderPop,
        setReminderPop,
        task,
        setTask,
        taskStore,
        setTaskStore
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};
