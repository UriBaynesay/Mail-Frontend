import { MailListPreview } from "./mail-list-preview"
// import { SampleData } from "../services/sample-data"
export const MailList = () => (
  <section className="mail-list-container">
    <section className="mail-list-controls-container">
      <h3>hello from controls</h3>
    </section>
    <section className="mail-list-previews-container">
      {/* {SampleData.mails.map((mail) => (
        <MailListPreview mail={mail}></MailListPreview>
      ))} */}
    </section>
  </section>
)
