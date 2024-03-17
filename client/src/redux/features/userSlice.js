import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        .addCase(signUpUser.fulfilled, (state,action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = []
        })
        .addCase(signUpUser.rejected, (state,action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload;
        })
    }
})

export default userSlice.reducer;