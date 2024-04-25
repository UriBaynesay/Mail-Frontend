import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { MailListPreview } from "./mail-list-preview"
import { mailService } from "../../services/mail.service"

export const MailList = ({ onSelectMail }) => {
  const [mails, setMails] = useState([])
  const user = useSelector((storeState) => storeState.user)

  useEffect(() => {
    if (user) {
      mailService
        .query({ to: { nickname: user.nickname } })
        .then((mails) => setMails(mails))
    }
  }, [])
  return (
    <section className="mail-list-container">
      <section className="mail-list-controls-container">
        <h3>hello from controls</h3>
      </section>
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
