import { 
    AddSubjectForm,
    AddSubjectFormContainer,
    CreateSubjectContainer,
 } from "../styles/CreateSubjectStyles"
 import { useState } from "react"
 import { useDispatch, useSelector } from "react-redux"
 import { createSubject } from "../redux/features/subjectSlice"


export default function CreateFolder({interaction}){
    const dispatch = useDispatch()
    // const {errors} = useSelector((state) => state.subjects)
    const [subjectObj, setSubjectObj] = useState({
        subject_name: "",
        color: "blue"

    })
    const {subject_name} = subjectObj

    function handleAddFormSubmit(e){
        e.preventDefault()
        dispatch(createSubject(subjectObj))
    }

    function handleChange(e){
        let value = e.target.value;
        let name = e.target.name;
        setSubjectObj({...subjectObj, [name]:value})
    }

    const addSubject = (
        <AddSubjectFormContainer>
            <AddSubjectForm onSubmit={handleAddFormSubmit}>
                <label>Folder name: </label>
                <input type="text" value={subject_name} name="subject_name" onChange={handleChange} />
                <button type="submit" alt="add folder">+</button>
            </AddSubjectForm>
        </AddSubjectFormContainer>)

    return(
        <CreateSubjectContainer className={ interaction !== "" ? "active" : ""}>
            {addSubject}
        </CreateSubjectContainer>
    )
}