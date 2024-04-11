import { configureStore } from "@reduxjs/toolkit"

import userSlice from "./slices/user"
import appMessageSlice from "./slices/app-message";

export const store = configureStore({ reducer: { user: userSlice, "app-message":appMessageSlice } })
