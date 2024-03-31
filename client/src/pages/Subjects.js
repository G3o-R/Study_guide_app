import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import FileFolder from "../components/FileFolder"
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
    const [ showMore, setShowMore ] = useState(false)
    const navigate = useNavigate()
    const folders = user.folders.map((folder) => (
        <FileFolder subject={folder} />
    ))

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
                <OptionsBtn onClick={()=>setShowMore(!showMore)}> + </OptionsBtn>
            </OptionsBtnWrapper>
            <OptionsWrapper className={showMore ? "active" : "inactive"}>
                <OptionsContainer>
                    <option className="delete" onClick={()=>console.log("delete")}>Delete</option>
                    <option className="add" onClick={()=>console.log("Add a folder")}>Add A Folder</option>
                </OptionsContainer>
            </OptionsWrapper>
        </SubjectsPageStyles>
    )
}