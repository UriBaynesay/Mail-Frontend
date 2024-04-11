import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setAppMessage } from "../store/slices/app-message"

export const AppMessage = () => {
  const dispatch = useDispatch()
  const message = useSelector((state) => state["app-message"])
  useEffect(() => {
    if (message) {
      window.setTimeout(() => {
        dispatch(setAppMessage(""))
      }, 3000)
    }
  }, [message])
  return (
    <div className={`app-message-container ${message ? "visible" : ""}`}>
      <h6>{message}</h6>
    </div>
  )
}
