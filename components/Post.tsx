import Link from 'next/link';
import React from 'react';

export interface PropsPost {
  post: {
    id: string;
    title: string;
    created_at: string;
    content: string;
  };
}

export const Post = ({ post }: PropsPost) => {
  return (
    <div>
      <span>{post.id}</span>
      {':'}
      <Link href={`/posts/${post.id}`} passHref>
        <span className='cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600'>
          {post.title}
        </span>
      </Link>
    </div>
  );
};
