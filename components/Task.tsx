import React from 'react';
import Link from 'next/link';

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
      <Link href={`/tasks/${task.id}`} passHref>
        <span className='cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600'>
          {task.title}
        </span>
      </Link>
    </div>
  );
};
