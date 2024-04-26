import React, { useState, useRef } from 'react';
import { addDocument } from '../redux/features/documentsSlice';
import { useDispatch } from 'react-redux';
import { DragNDropForm, DropZoneContainer, SelectFileButton } from '../styles/DragNDropFiles';

export default function DragNDropFiles({ serialNumber }) {
  const [dragging, setDragging] = useState(false);
  const [fileObj, setFileObj] = useState({
    name: "test",
    description: "description here",
    document: null
  });

  const fileInputRef = useRef(null);
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFileObj({ ...fileObj, document: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', fileObj.document.name);
    formData.append('description', fileObj.description);
    formData.append('pdf_file', fileObj.document);
    formData.append('serial_number', serialNumber);
  
    dispatch(addDocument(formData));
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <DragNDropForm onSubmit={handleSubmit}>
      <DropZoneContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        {fileObj.document ? (
          <p>File selected: {fileObj.document.name}</p>
        ) : (
          <p>Drag & Drop PDF file here or</p>
        )}
        <SelectFileButton type="button" onClick={openFileDialog}>Select File</SelectFileButton>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileInputChange} 
        />
      </DropZoneContainer>
      <div>
        <button type="submit">Submit</button>
      </div>
    </DragNDropForm>
  );
};
