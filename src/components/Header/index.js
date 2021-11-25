import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo"
        src="https://res.cloudinary.com/des7uyibo/image/upload/v1612513736/logo_1_riutsp.svg"
        alt="logo"
      />
      <h1 className="movies">Movies</h1>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Latest</li>
        <li>Upcoming</li>
        <li>Trailers</li>
      </ul>
      <button className="btn" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
