import { 
    AddFolderForm,
    AddFolderFormContainer,
    CreateFolderContainer,
 } from "../styles/CreateFolderStyles"
 import { useState } from "react"

export default function CreateFolder({interaction}){
    const [folderObj, setFolderObj] = useState({
        subject_name: "",

    })
    const {subject_name} = folderObj

    function handleAddFormSubmit(e){
        e.preventDefault()
        console.log(folderObj)
    }

    function handleChange(e){
        let value = e.target.value;
        let name = e.target.name;
        setFolderObj({...folderObj, [name]:value})
    }

    const addFolder = (
        <AddFolderFormContainer>
            <AddFolderForm onSubmit={handleAddFormSubmit}>
                <label>Folder name: </label>
                <input type="text" value={subject_name} name="subject_name" onChange={handleChange} />
                <button type="submit" alt="add folder">+</button>
            </AddFolderForm>
        </AddFolderFormContainer>)

    return(
        <CreateFolderContainer className={ interaction !== "" ? "active" : ""}>
            {addFolder}
        </CreateFolderContainer>
    )
}