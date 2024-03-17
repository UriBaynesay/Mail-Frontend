import { MailTypePreview } from "./mail-type-preview"
const mailTypesList = ["Inbox", "Starred", "Important", "Sent", "Spam"]

export const Sidebar = () => (
  <section className="sidebar-container">
    <button className="compose-btn">
      <h4>Compose</h4>
    </button>
    <section className="filters-list-container">
      {mailTypesList.map((type)=><MailTypePreview type={type}></MailTypePreview>)}
    </section>
  </section>
)
