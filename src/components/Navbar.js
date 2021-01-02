import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = props => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
            <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => props.handleChange(e.target.value)} />
      </form>
    </div>
  </nav>

);

NavBar.propTypes = {
  handleChange: PropTypes.func,
};

NavBar.defaultProps = {
  handleChange: null,
};

export default NavBar;
