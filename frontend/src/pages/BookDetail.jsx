import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const id = useParams().id;
    console.log(id);
    useEffect(() => {

    })
  return (
    <div>
      
    </div>
  );
}

export default BookDetail;
