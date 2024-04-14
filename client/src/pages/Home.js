import { 
    HomePageStyles,
    Header,
    HeaderContainer,
    FoldersDisplayContainer
} from "../styles/HomeStyles"
import { useSelector } from "react-redux"
import FileFolder from "../components/FileFolder"

export default function Home(){
    const { user } = useSelector((state) => state.user)
    const subjects = user.subjects.map((subject) => (
        <FileFolder key={subject.serial_number} subject={subject} />
    ))

    return(
        <HomePageStyles>
            <HeaderContainer>
                <Header>Your Desk</Header>
                <FoldersDisplayContainer>

                {subjects}
                </FoldersDisplayContainer>
            </HeaderContainer>

        </HomePageStyles>
    )
}