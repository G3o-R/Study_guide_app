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
   OptionsWrapper
} from "../styles/SubjectsPageStyles"

export default function Subjects(){
    const {user} = useSelector((state) => state.user)
    const [ showMore, setShowMore ] = useState(false)
    const navigate = useNavigate()
    const folders = user.folders.map((folder) => (
        <FileFolder subject={folder} />
    ))

    const subjects = user.folders.map((folder) => (
        <tr className="subject-list-table-row">
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

            </OptionsWrapper>
        </SubjectsPageStyles>
    )
}