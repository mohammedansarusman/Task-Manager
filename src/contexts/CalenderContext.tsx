import { createContext, useState, type ReactNode } from "react";

export type Task = {
  id: number
  task: string;
  dueDate: string;
  reminderDate: string;
  currentDateTime: Date;
  dueTodayDateTime: Date;
  dueTomorrowDateTime : Date;
  dueNextWeekDateTime: Date;
  duePickDate: Date;
  reminderLaterToday: Date;
  reminderTomorrow: Date;
  reminderNextWeek: Date;
  reminderPickDateTime?: Date;
  completed: boolean;
  status: string;
  important: boolean
}
type StatusType = "today" | "tomorrow" | "nextWeek" | "pickDate";

type TaskDetailsProp = {
  task: string;
  completed: boolean;
  important: boolean;
}




type CalenderProps = {
  // schedule is using for the calendar date 
  schedule: string;
  setSchedule: React.Dispatch<React.SetStateAction<string>>;
  pickDate: Date;
  setPickDate: React.Dispatch<React.SetStateAction<Date>>;
  turnPopOver: boolean;
  setTurnPopOver: React.Dispatch<React.SetStateAction<boolean>>;
  // reminder is using for reminder date
  reminder: string;
  setReminder: React.Dispatch<React.SetStateAction<string>>;
  hour: string;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  reminderPop: boolean;
  setReminderPop: React.Dispatch<React.SetStateAction<boolean>>;
  pickDateTime: Date;
  setPickDateTime: React.Dispatch<React.SetStateAction<Date>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
  // this is the store that saving all data like task due date, reminder date, task name.
  taskStore: Task[];
  setTaskStore: React.Dispatch<React.SetStateAction<Task[]>>
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
  statusText: StatusType;
  setStatusText: React.Dispatch<React.SetStateAction<StatusType>>;
  clickTaskItem: boolean;
  setClickTaskItem: React.Dispatch<React.SetStateAction<boolean>>;
  taskId: number;
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  taskDetails: TaskDetailsProp;
  setTaskDetails: React.Dispatch<React.SetStateAction<TaskDetailsProp>>
};
type ProviderProp = {
  children: ReactNode;
};

export const CalenderContext = createContext<CalenderProps | undefined>(
  undefined
);

export const CalenderContextprovider = ({ children }: ProviderProp) => {
  const [schedule, setSchedule] = useState<string>("");
  const [pickDate, setPickDate] = useState<Date>(new Date());
  const [turnPopOver, setTurnPopOver] = useState<boolean>(false);
  const [reminder, setReminder] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [reminderPop, setReminderPop] = useState<boolean>(false);
  const [task,setTask] = useState<string>("");
  const [taskStore, setTaskStore] = useState<Task[]>([]);
  const [pickDateTime, setPickDateTime] = useState<Date>(new Date());
  const [refresh,setRefresh] = useState<number>(0);
  const [statusText, setStatusText] = useState<StatusType>("today");
  const [clickTaskItem, setClickTaskItem] = useState<boolean>(true);
  const [taskId, setTaskId] = useState<number>(0);
  const [taskDetails, setTaskDetails] = useState<TaskDetailsProp>({task:"",completed:false,important:false});
  
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
        setTaskStore,
        pickDate,
        setPickDate,
        pickDateTime,
        setPickDateTime,
        refresh,
        setRefresh,
        statusText,
        setStatusText,
        clickTaskItem,
        setClickTaskItem,
        taskId,
        setTaskId,
        taskDetails,
        setTaskDetails,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};
