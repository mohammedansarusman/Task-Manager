import { createContext, useState, type ReactNode } from "react";
type Task = {
  task: string;
  dueDate: string;
  reminderDate: string;
}
type CalenderProps = {
  // schedule is using for the calendar date 
  schedule: string;
  setSchedule: React.Dispatch<React.SetStateAction<string>>;
  turnPopOver: boolean;
  setTurnPopOver: React.Dispatch<React.SetStateAction<boolean>>;
  // reminder is using for reminder date
  reminder: string;
  setReminder: React.Dispatch<React.SetStateAction<string>>;
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
  const [schedule, setSchedule] = useState<string>("");
  const [turnPopOver, setTurnPopOver] = useState<boolean>(false);
  const [reminder, setReminder] = useState<string>("");
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
