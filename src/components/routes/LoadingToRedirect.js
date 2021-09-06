import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
const LoadingToRedirect = () => {
  //using hooks
  const [count, setCount] = useState(5);
  const history = useHistory();
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    count === 0 && history.push('/');
    return () => {
      clearTimeout(timeoutID);
    };
  });

  //write functions

  return (
    <div className='container p-5 text-center'>
      <h1 className='text-danger'>
        You will be redirect after {count} seconds.
      </h1>
    </div>
  );
};

export default LoadingToRedirect;
