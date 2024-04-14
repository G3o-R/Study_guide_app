import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addSubjectToUser } from "./userSlice";

export const createSubject = createAsyncThunk("subject/createSubject", async (subjectObjData, thunkAPI) => {
    try {
        const response = await fetch ("/subjects", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subjectObjData)
        })

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }
        thunkAPI.dispatch(addSubjectToUser(subjectObjData))
        return response.json()

    } catch(errors) { 
        return thunkAPI.rejectWithValue("An error occurred while logging in")
     }
})

const subjectSlice = createSlice({
    name: "subject",
    initialState: {
        subjects: [],
        loading: false,
        errors: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // creates subjects
        .addCase(createSubject.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(createSubject.fulfilled, (state, action) => {
            state.loading = false;
            state.subjects = [...state.subjects, action.payload];
            state.errors = [];
        })
        .addCase(createSubject.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
    }
})

export default subjectSlice.reducer