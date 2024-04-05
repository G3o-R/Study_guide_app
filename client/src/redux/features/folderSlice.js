import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createFolder = createAsyncThunk("folder/createFolder", async (folderObjData, thunkAPI) => {
    try {
        const response = await fetch ("/folders", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(folderObjData)
        })

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        return response.json()

    } catch(errors) { 
        return thunkAPI.rejectWithValue("An error occurred while logging in")
     }
})

const folderSlice = createSlice({
    name: "folder",
    initialState: {
        folders: [],
        loading: false,
        errors: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // creates folders
        .addCase(createFolder.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(createFolder.fulfilled, (state, action) => {
            state.loading = false;
            state.folders = [...state.posts, action.payload];
            state.errors = [];
        })
        .addCase(createFolder.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
    }
})