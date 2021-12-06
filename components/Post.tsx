import React from 'react';

interface PropsPost {
  post: {
    id: string;
    title: string;
  };
}

export const Post = ({ post }: PropsPost) => {
  return (
    <div>
      <span>{post.id}</span>
      {':'}
      <span className='cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600'>
        {post.title}
      </span>
    </div>
  );
};
