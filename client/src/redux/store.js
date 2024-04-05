import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import foldersReducer from "./features/folderSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        folders: foldersReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})