import refresh from "../../styles/svg/refresh.svg"

export const MailListControls = ({ loadMails }) => {
  return (
    <section className="mail-list-controls-container">
      <img src={refresh} alt="" onClick={() => loadMails()} />
    </section>
  )
}
