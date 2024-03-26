import React from 'react';
import {
    FolderContainer,
    FolderName
} from "../styles/FileFolderStyles"


export default function FileFolder({subject}){

  return (
    <FolderContainer className={subject.color}>
      <FolderName>{subject.subject_name}</FolderName>
    </FolderContainer>
  );
};