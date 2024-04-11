import { Header } from "../components/homepage/header"
import { MailList } from "../components/homepage/mail-list"
import { Sidebar } from "../components/homepage/sidebar"
import { MailView } from "../components/homepage//mail-view"

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
