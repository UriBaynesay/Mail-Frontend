import { Header } from "../components/header"
import { MailList } from "../components/mail-list"
import { Sidebar } from "../components/sidebar"

export const Homepage = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <MailList></MailList>
    </>
  )
}
