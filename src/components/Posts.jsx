import React from 'react';
import Sidebar from './Sidebar';
import PostTemplate from './PostTemplate';

const Posts = () => {
  return (
    <>
      <div className='flex '>
          <Sidebar />
          <PostTemplate/>
    </div></>
  );
};

export default Posts;
