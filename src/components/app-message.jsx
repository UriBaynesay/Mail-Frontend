import { useEffect, useState } from "react"


export const AppMessage = () => {
  const [message, setMessage] = useState("")
  const [messageClass,setMessageClass]=useState("")
  useEffect(() => {
    let timer
    const evListener = window.addEventListener("app-message", (ev) => {
      const text = ev.detail
      setMessage(text)
      setMessageClass("visible")
      timer=window.setTimeout(() => {
        setMessageClass("")
      }, 3000)
    })
    return () => {
      window.removeEventListener("app-message", evListener)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`app-message-container ${messageClass}`}>
      <h6>{message}</h6>
    </div>
  )
}
