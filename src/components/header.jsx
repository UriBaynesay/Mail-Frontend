import { Link } from "react-router-dom"
import hamburger from "../styles/svg/hamburger.svg"
import mail from "../styles/svg/mail.svg"

export const Header = () => (
  <header className="header-container">
    <section className="logo-container">
      <div className="hamburger-container">
        <img src={hamburger} alt="" />
      </div>
      <div className="logo-image-container">
        <img src={mail} alt="" />
      </div>
      <h1>Mail</h1>
    </section>
    <section className="search-bar-container">
      <form className="search-bar-form-container">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 26"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search mail"
        />
      </form>
    </section>

    <section className="user-controls-container">
      <Link to="login">
        <div className="user-icon-container">
          <h1>user icon</h1>
        </div>
      </Link>
    </section>
  </header>
)
