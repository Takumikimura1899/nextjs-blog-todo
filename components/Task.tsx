import React from 'react';
import { Tasks } from '../lib/tasks';

export interface PropsTask {
  task: {
    id: string;
    title: string;
  };
}

export const Task: React.FC<PropsTask> = ({ task }) => {
  return (
    <div>
      <span>{task.id}</span>
      {' : '}
      <span className='cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600'>
        {task.title}
      </span>
    </div>
  );
};
