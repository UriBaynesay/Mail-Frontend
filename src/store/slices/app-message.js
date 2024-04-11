import { createSlice } from "@reduxjs/toolkit"

export const appMessageSlice = createSlice({
  name: "app-message",
  initialState: "",
  reducers: {
    setAppMessage: (state, action) => {
      return action.payload
    },
  },
})
export const { setAppMessage } = appMessageSlice.actions

export default appMessageSlice.reducer
