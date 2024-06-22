import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h2>Post di slug: {id}</h2>
    </>
  );
};

export default SinglePost;
