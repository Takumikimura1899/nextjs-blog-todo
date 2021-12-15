import { createContext, Dispatch, SetStateAction, useState } from 'react';

type Task = {
  id: number;
  title: string;
};

export interface TaskContextInterface {
  selectedTask: Task;
  setSelectedTask: Dispatch<SetStateAction<Task>>;
}

export const StateContext = createContext<TaskContextInterface | undefined>(
  undefined
);

const StateContextProvider: React.FC = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: '' });
  return (
    <StateContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
