import hamburger from '../styles/svg/hamburger.svg'
import mail from "../styles/svg/mail.svg"

export const Header = () => (
  <header className="header-container">
    <section className="left-header-container">
      <section className="logo-container">
        <div className="hamburger-container">
          <img src={hamburger} alt="" />
        </div>
        <div className="logo-container">
          <img src={mail} alt="" />
        </div>
      </section>
      <section className="search-bar-container">
        <h1>search bar</h1>
      </section>
    </section>
    <section className="right-header">
      <div className="user-icon-container">
        <h1>user icon</h1>
      </div>
    </section>
  </header>
)
