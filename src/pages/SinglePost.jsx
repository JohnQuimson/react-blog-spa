import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  return (
    <>
      <h2>prodotto di ID {id}</h2>
    </>
  );
};

export default SinglePost;
