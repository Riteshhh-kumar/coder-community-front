import React from 'react';
import Sidebar from './Sidebar';
import PostTemplate from './PostTemplate';

import CreatePost from './CreatePost';



const Posts = ({username}) => {
 
  return (
    <>
      <div className='flex '>
          <Sidebar />
        <PostTemplate username={username} />
        <CreatePost username={username}/>
        
    </div></>
  );
};

export default Posts;
