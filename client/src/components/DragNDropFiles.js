import React, { useState } from 'react';

export default function DragNDropFiles(){
    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
  
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
      // Do something with the dropped files, like uploading or displaying
      console.log(files);
    };
  
    const handleFileInputChange = (e) => {
      const files = [...e.target.files];
      setSelectedFiles(files);
      // Do something with the selected files
      console.log(files);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
      
        // Log each entry in the FormData object
        for (let entry of formData.entries()) {
          console.log(entry);
        }
      
        // Send formData to the server
        console.log(formData);
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