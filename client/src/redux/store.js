import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import subjectsReducer from "./features/subjectSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        subjects: subjectsReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})