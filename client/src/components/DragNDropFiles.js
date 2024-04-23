import React, { useState } from 'react';
import { addDocument } from '../redux/features/documentsSlice';
import { useDispatch } from 'react-redux';

export default function DragNDropFiles({ serialNumber }) {
  const [dragging, setDragging] = useState(false);
  const [fileObj, setFileObj] = useState({
    name: "test",
    description: "description here",
    document: null
  });

  const dispatch = useDispatch();

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    setFileObj({ ...fileObj, document: file });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFileObj({ ...fileObj, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', fileObj.name);
    formData.append('description', fileObj.description);
    formData.append('pdf_file', fileObj.document);
    formData.append('serial_number', serialNumber);
  
    dispatch(addDocument(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        style={{ border: `2px dashed ${dragging ? 'blue' : 'black'}`, padding: '20px', textAlign: 'center' }}
      >
        <p>Drag & Drop PDF file here</p>
      </div>
      <div>
        {/* <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={fileObj.name} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={fileObj.description} onChange={handleInputChange}></textarea> */}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
