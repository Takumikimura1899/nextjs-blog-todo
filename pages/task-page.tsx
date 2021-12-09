import { Layout } from '../components/Layout';
import Link from 'next/link';
import { getAllTasksData } from '../lib/tasks';
import { Task } from '../components/Task';

interface StaticFilteredTasks {
  staticFilteredTasks: {
    id: string;
    title: string;
  }[];
}

const TaskPage: React.FC<StaticFilteredTasks> = ({ staticFilteredTasks }) => {
  return (
    <Layout title='Task Page'>
      <ul>
        {staticFilteredTasks &&
          staticFilteredTasks.map((task) => <Task key={task.id} task={task} />)}
      </ul>
      <Link href='/main-page' passHref>
        <div className='flex cursor-pointer mt-12'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const staticFilteredTasks = await getAllTasksData();

  return {
    props: { staticFilteredTasks },
  };
};

export default TaskPage;
