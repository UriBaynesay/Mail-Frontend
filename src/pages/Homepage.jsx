import { Header } from "../components/header"
import { MailList } from "../components/mail-list"
import { Sidebar } from "../components/sidebar"
import { MailView } from "../components/mail-view"

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header></Header>
      <Sidebar></Sidebar>
      <MailList></MailList>
      {/* <MailView></MailView> */}
    </div>
  )
}
