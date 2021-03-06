import Head from 'next/head';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Default title',
}) => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800'>
        <Head>
          <title>{title}</title>
        </Head>
        <main className='flex flex-1 justify-center items-center w-screen flex-col'>
          {children}
        </main>
        <footer className='w-full h-6 flex justify-center items-center text-gray-500 text-sm'>
          @taku 2021
        </footer>
      </div>
    </div>
  );
};
