import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// handles signing up
export const signUpUser = createAsyncThunk("user/signUpUser", async (signUpData, thunkAPI) => {
    try {
        const response = await fetch ("/signup", {
            method: "Post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData)
          })

          if (!response.ok) {
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
          }
          return response.json()

    } catch(errors) { 
        return thunkAPI.rejectWithValue("An error occurred while logging in")
     }
})

export const loginUser = createAsyncThunk("user/loginUser", async (loginData, thunkAPI) => {
    try {
        const response = await fetch ("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        return response.json()
    } catch (errors){
        return thunkAPI.rejectWithValue("An errors occurred while logging in.")
    }
})

// maintains session
export const getMe = createAsyncThunk("user/getMe", async (thunkAPI) => {
    try {
        const response = await fetch("/me")

        if (!response.ok) {
            return thunkAPI.rejectWithValue("Not Authorized")
        }

        return response.json()

    } catch (errors){
        return thunkAPI.rejectWithValue("An ocurred with the session")
    }
})

export const addSubjectToUser = createAction("folder/addFolderToUser")
export const addDocumentToUser = createAction("document/addDocumentToUser")


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true,
        errors: []
    },
    reducers: { },
    extraReducers: (builder) => {
        builder
        // handles signing up
        .addCase(signUpUser.pending, (state) => {
            state.loading = true;
            state.errors = []
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = []
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload;
        })
        // handles logging in
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = [];
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload
        })
        // handles maintaining the user's session
        .addCase(getMe.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = [];
        })
        .addCase(getMe.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload;
        })
        // adds folder to user
        .addCase(addSubjectToUser, (state, action) => {
            state.user.subjects = [...state.user.subjects, action.payload]
        })
        .addCase(addDocumentToUser, (state, action) => {
            const { name, description, subject_id, pdf_file} = action.payload
            // const subjectToAddTo = state.user.subjects.find((subject) => subject.id === subject_id)
            // const updatedDocsArray = [...subjectToAddTo.documents, action.payload]
            const updatedSubjectDocsArray = state.user.subjects.map((subject) => {
                if (subject.id === subject_id){
                    console.log(subject)
                    const updatedDocsArray = [...subject.documents, action.payload]
                    console.log(updatedDocsArray)
                    subject.documents = updatedDocsArray
                    return subject
                } return subject
            })
            state.user.subjects = updatedSubjectDocsArray;
            // debugger
        })

    }
})

export default userSlice.reducer;