import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  styles?: string;
}

function Loading({
  styles = 'w-full h-full flex justify-center items-center',
}: Props) {
  return (
    <div className={`${styles}`}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
