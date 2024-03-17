export const MailListPreview=({mail})=>{
    return (
      <div className="mail-preview">
        <h4>
          {mail.from.nickname || mail.from.firstName + " " + mail.from.lastName}
        </h4>
        <div className="middle">
          <h4>{mail.title}-</h4>
          <span>{mail.text}</span>
        </div>

        <span>{mail.date.toLocaleDateString()}</span>
      </div>
    )
}