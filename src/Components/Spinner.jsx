import React from 'react';
import { BeatLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
