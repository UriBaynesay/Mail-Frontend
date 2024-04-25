export const MailView = ({ selectedMail, onCloseMailView }) => {
  return (
    <section className="mail-view-container">
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={onCloseMailView}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </section>
      <section className="mail-container">
        <h2>{selectedMail.title}</h2>
        <div className="sender-details-container">{`${selectedMail.from.nickname}, ${selectedMail.from.firstName} ${selectedMail.from.lastName}`}</div>
        <article>{selectedMail.text}</article>
      </section>
    </section>
  )
}
