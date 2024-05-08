import React from 'react';
import {
  HeaderContainer,
  SubjectCardContainer,
  SubjectName,
  ShowContentContainer,
  ShowContentButton
} from "../styles/SubjectCardStyles"
import { useNavigate } from 'react-router-dom';


export default function SubjectCard({subject}){
  const navigate = useNavigate()

  return (
    <SubjectCardContainer>
      <HeaderContainer className={subject.color}>
        <SubjectName onClick={()=>navigate(`/subjects/${subject.serial_number}`)}>{subject.subject_name}</SubjectName>
      </HeaderContainer>
      <ShowContentContainer>
        <ShowContentButton>
        &#11167;
        </ShowContentButton>
      </ShowContentContainer>
    </SubjectCardContainer>
  );
};