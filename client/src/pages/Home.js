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
    const folders = user.folders.map((folder) => (
        <FileFolder subject={folder} />
    ))

    return(
        <HomePageStyles>
            <HeaderContainer>
                <Header>Your Desk</Header>
                {/* <hr/> */}
                <FoldersDisplayContainer>

                {folders}
                </FoldersDisplayContainer>
            </HeaderContainer>

        </HomePageStyles>
    )
}