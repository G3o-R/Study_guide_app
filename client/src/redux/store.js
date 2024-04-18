import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import subjectsReducer from "./features/subjectSlice"
import documentsReducer from "./features/documentsSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        subjects: subjectsReducer,
        documents: documentsReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})