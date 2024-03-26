import React from 'react';
import {
    FolderContainer,
    FolderCover,
    FolderFlap,
    FolderName
} from "../styles/FileFolderStyles"


export default function FileFolder({subject}){

  return (
    <FolderContainer className={subject.color}>
      {/* <FolderCover /> */}
      {/* <FolderFlap /> */}
      <FolderName>{subject.subject_name}</FolderName>
    </FolderContainer>
  );
};