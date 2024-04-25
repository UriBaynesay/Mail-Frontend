import { useState } from "react"

import { Header } from "../components/homepage/header"
import { MailList } from "../components/homepage/mail-list"
import { Sidebar } from "../components/homepage/sidebar"
import { MailView } from "../components/homepage//mail-view"
import { mailService } from "../services/mail.service"

export const Homepage = () => {
  const [selectedMail, setSelectedMail] = useState(null)

  const onSelectMail = async (mailId) => {
    const mail = await mailService.query({ _id: mailId })
    setSelectedMail(mail[0])
  }
  const onCloseMailView = () => {
    setSelectedMail(null)
  }

  return (
    <div className="homepage-container">
      <Header></Header>
      <Sidebar></Sidebar>
      {selectedMail ? (
        <MailView
          selectedMail={selectedMail}
          onCloseMailView={onCloseMailView}
        ></MailView>
      ) : (
        <MailList onSelectMail={onSelectMail}></MailList>
      )}
    </div>
  )
}
