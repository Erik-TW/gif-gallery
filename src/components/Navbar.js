import classes from './Navbar.module.css';

const Navbar = (props) => {
    let galleryClass = classes.active;
    let searchClass = "";
    if(props.searchSelected === true) {
         galleryClass = "";
         searchClass = classes.active;

    }

    return(
    /*<div style={{display: 'flex', flexDirection: 'column'}}>
    <nav className={`navbar navbar-expand navbar-light bg-light`}>
    <a className="navbar-brand" href="/">Gif Gallery</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={galleryClass}>
          <a className="nav-link" href="/">Gallery </a>
        </li>
        <li className={searchClass}>
          <a className="nav-link" href="/search">Search </a>
        </li>
      </ul>
    </div>
  </nav>
  </div>*/

  <nav className={classes.topnav}>
    <a href="/" className={galleryClass}>Gallery</a>
    <a href="/search" className={searchClass}>Search</a>
    
  </nav>
    );
}

export default Navbar;