import React from 'react';
import { useParams } from 'react-router-dom';

export default function SubjectContentPage() {
  const { serialNumber } = useParams();
  console.log(serialNumber)
  console.log("test")

  return (
    <div className='test'>
      <h2>Folder Details</h2>
      <p>Serial Number: {serialNumber}</p>
    </div>
  );
}