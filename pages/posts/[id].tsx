import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

interface PostProps {
  post: {
    title: string;
    id: string;
    created_at: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <p className='m-4'>
        {'ID :'}
        {post.id}
      </p>
      <p className='mb-4 text-xl font-bold'>{post.title}</p>
      <p className='mb-12'>{post.created_at}</p>
      <p className='px-10'>{post.content}</p>
      <Link href='/blog-page' passHref>
        <div className='flex cursor-pointer mt-12'>
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
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}
