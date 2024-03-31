import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
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

export default function Subjects(){
    const {user} = useSelector((state) => state.user)
    const [ showOptions, setShowOptions ] = useState(false)
    const [ optionToDisplay, setOptionToDisplay] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        function handleOutsideClick(event) {
            // if 
        }
    },[])

    function handleOptionToDisplay(e){
        setOptionToDisplay(e.target.className)
        console.log(optionToDisplay)
    }

    const subjects = user.folders.map((folder) => (
        <tr className="subject-list-table-row" key={folder.subject_name}>
            <td className="subject-name" onClick={()=>navigate(`${folder.subject_name}`)}>{folder.subject_name}</td>
            <td>01/01/2024</td>
            <td>01/01/20204 16:00</td>
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