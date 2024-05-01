import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Checkbox } from "@mui/material"

import { MailListPreview } from "./mail-list-preview"
import { mailService } from "../../services/mail.service"
import { MailListControls } from "./mail-list-controls"

export const MailList = ({ onSelectMail }) => {
  const [mails, setMails] = useState([])
  const user = useSelector((storeState) => storeState.user)

  const loadMails = async () => {
    if (user) {
      let loadedMails = await mailService.query({
        to: { nickname: user.nickname },
      })
      loadedMails = loadedMails.map((mail) => ({ ...mail, checked: false }))
      setMails(loadedMails)
    } else {
      setMails([])
    }
  }
  const updateSelected = (target, mailId) => {
    const tempMails = [...mails]
    const targetMail = tempMails.find((mail) => mail._id === mailId)
    targetMail.checked = target.checked
    setMails(tempMails)
  }
  useEffect(() => {
    if (mails.length === 0) loadMails()
  }, [])

  return (
    <section className="mail-list-container">
      <MailListControls loadMails={loadMails}></MailListControls>
      <section className="mail-list-previews-container">
        {mails.map((mail) => (
          <>
            <Checkbox
              checked={mail.checked}
              title="Select"
              onChange={(e) => updateSelected(e.target, mail._id)}
            />
            <MailListPreview
              key={mail._id}
              mail={mail}
              onSelectMail={onSelectMail}
            ></MailListPreview>
          </>
        ))}
      </section>
    </section>
  )
}
