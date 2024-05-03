import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDocumentToUser } from "./userSlice";

export const addDocument = createAsyncThunk("files/addFile", async (fileObj, thunkAPI) => {
    try { 
        const response = await fetch ("/documents", {
            method: "Post",
            body: (fileObj)
        })

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }
        let newDocObj = await response.json()
        thunkAPI.dispatch(addDocumentToUser(newDocObj))
        return newDocObj

    } catch(errors) {
        return thunkAPI.rejectWithValue("An error occurred while adding the documents")
    }
})

const documentsSlice = createSlice({
    name: "documents",
    initialState: {
        document: null,
        loading: false,
        errors: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // adds document
        .addCase(addDocument.pending, (state) => {
            state.loading = false;
            state.errors = [];
        })
        .addCase(addDocument.fulfilled, (state, action) => {
            state.loading = false;
            state.errors = [];
            state.document = action.payload;
        })
        .addCase(addDocument.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
    }
})

export default documentsSlice.reducer