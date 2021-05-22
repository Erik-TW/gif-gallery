const Navbar = (props) => {
    let galleryClass = "nav-item active";
    let searchClass = "nav-item";
    if(props.searchSelected === true) {
         galleryClass = "nav-item";
         searchClass = "nav-item active";
    }
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Gif Gallery</a>
  
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
    );
}

export default Navbar;