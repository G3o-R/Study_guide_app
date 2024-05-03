import React from 'react';
import {
  HeaderContainer,
  SubjectCardContainer,
  SubjectName,
  ShowContentContainer,
  ShowContentButton
} from "../styles/SubjectCardStyles"


export default function SubjectCard({subject}){

  return (
    <SubjectCardContainer className={subject.color}>
      <HeaderContainer>
        <SubjectName>{subject.subject_name}</SubjectName>
      </HeaderContainer>
      <ShowContentContainer>
        <ShowContentButton>
        &#11167;
        </ShowContentButton>
      </ShowContentContainer>
    </SubjectCardContainer>
  );
};