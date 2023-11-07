'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong - we're sorry about that!</h2>
      <button onClick={() => reset()}>Try again!</button>
    </div>
  );
}
