import React, { useState } from 'react';
import { addDocument } from '../redux/features/documentsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function DragNDropFiles(){
    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const dispatch = useDispatch()
  
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
  
      const files = [...e.dataTransfer.files];
      setSelectedFiles(files);
      console.log(files);
    };
  
    const handleFileInputChange = (e) => {
      const files = [...e.target.files];
      setSelectedFiles(files);
      console.log(files);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
      
        // for (let entry of formData.entries()) {
        //   console.log(entry);
        // }
      
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
          <p>Drag & Drop PDF files here</p>
          <input type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
        </div>
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };