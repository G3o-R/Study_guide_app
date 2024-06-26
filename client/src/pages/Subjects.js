import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { 
   SubjectsPageStyles,
   HeaderContainer,
   FoldersHeader,
   TableWrapper,
   OptionsBtnWrapper,
   OptionsBtn,
   OptionsWrapper,
   OptionsContainer
} from "../styles/SubjectsPageStyles"
import CreateSubject from "../components/CreateSubject"

export default function Subjects(){
    const {user} = useSelector((state) => state.user)
    const [ showOptions, setShowOptions ] = useState(false)
    const [ optionToDisplay, setOptionToDisplay] = useState("")
    const navigate = useNavigate()

    function handleOptionToDisplay(e){
        setOptionToDisplay(e.target.className)
    }

    function handleSubjectClick(serialNumber){
        navigate(`/subjects/${serialNumber}`)
    }

    console.log(user.subjects)

    const subjects = user.subjects.map((subject) => (
        <tr className="subject-list-table-row" key={subject.subject_name}>
            <td className="subject-name" onClick={()=>handleSubjectClick(subject.serial_number)}>{subject.subject_name}</td>
            <td>01/01/2024</td>
            <td>01/01/2024 16:00</td>
            <td>false</td>

        </tr>
    ))

    return(
        <SubjectsPageStyles>
            <HeaderContainer>
                <FoldersHeader>Your Folders</FoldersHeader>
            </HeaderContainer>
            <TableWrapper>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Created at: ####</th>
                        <th>Most recent change: ###</th>
                        <th>Shared</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects}
                </tbody>
            </table>
            </TableWrapper>
            {/* <CreateFolder interaction={optionToDisplay}/> */}
            {optionToDisplay === "add" ? <CreateSubject /> : null }
            <OptionsBtnWrapper>
                <OptionsBtn onClick={()=>setShowOptions(!showOptions)}> + </OptionsBtn>
            </OptionsBtnWrapper>
            <OptionsWrapper className={showOptions ? "active" : "inactive"}>
                <OptionsContainer>
                    <option className="delete" onClick={handleOptionToDisplay}>Delete</option>
                    <option className="add" onClick={handleOptionToDisplay}>Add A Folder</option>
                    {/* the idea is that after clicking on delete/add the OptionsContainer
                    will transition into some sort of UI for that specific function and look really cool
                    but rn I just want to be able to post a folder and then be able to add PDF files to those folders so
                    this'll have to be on pause for now */}
                </OptionsContainer>
            </OptionsWrapper>
        </SubjectsPageStyles>
    )
}