import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { MailListPreview } from "./mail-list-preview"
import { mailService } from "../../services/mail.service"
import { MailListControls } from "./mail-list-controls"

export const MailList = ({ onSelectMail }) => {
  const [mails, setMails] = useState([])
  const user = useSelector((storeState) => storeState.user)

  const loadMails = async () => {
    if (user) {
      const loadedMails = await mailService.query({
        to: { nickname: user.nickname },
      })
      setMails(loadedMails)
    }else {
      setMails([])
    }
  }

  useEffect(() => {
    if (mails.length===0) loadMails()
  }, [])

  return (
    <section className="mail-list-container">
      <MailListControls loadMails={loadMails}></MailListControls>
      <section className="mail-list-previews-container">
        {mails.map((mail) => (
          <MailListPreview
            key={mail._id}
            mail={mail}
            onSelectMail={onSelectMail}
          ></MailListPreview>
        ))}
      </section>
    </section>
  )
}
