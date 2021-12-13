import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import useSWR from 'swr';
import { Layout } from '../../components/Layout';
import { PropsTask } from '../../components/Task';
import { getAllTaskIds, getTaskData, Tasks } from '../../lib/tasks';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Post: React.FC<Props> = ({ staticTask, id }) => {
  const router = useRouter();
  const { data: task, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`,
    fetcher,
    {
      fallbackData: staticTask,
    }
  );
  useEffect(() => {
    mutate();
  }, [mutate]);
  if (router.isFallback || !task) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Layout title={task.title}>
        <span className='mb-4'>
          {'ID : '}
          {task.id}
        </span>
        <p className='mb-4 text-xl font-bold'>{task.title}</p>
        <p className='mb-12'>{task.created_at}</p>
        <Link href='/task-page' passHref>
          <div className='flex cursor-pointer mt-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className=' h-6 w-6 mr-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
            <span>Back to task-page</span>
          </div>
        </Link>
      </Layout>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllTaskIds();

  return {
    paths,
    fallback: true,
  };
};
interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  id: string;
  staticTask: Tasks;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { task: staticTask } = await getTaskData(params!.id);
  return {
    props: {
      id: staticTask.id,
      staticTask,
    },
    revalidate: 3,
  };
};

export default Post;
