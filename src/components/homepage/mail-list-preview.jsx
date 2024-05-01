export const MailListPreview = ({ mail, onSelectMail }) => {
  return (
    <div className="mail-preview" onClick={() => onSelectMail(mail._id)}>
      <h4>
        {mail.from.nickname || mail.from.firstName + " " + mail.from.lastName}
      </h4>
      <div className="middle">
        <h4>{mail.title}-</h4>
        <span>{mail.text}</span>
      </div>
      <span>{new Date(mail.date).toLocaleDateString("he")}</span>
    </div>
  )
}
