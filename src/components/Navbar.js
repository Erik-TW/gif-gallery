import classes from './Navbar.module.css';

const Navbar = (props) => {
    let galleryClass = classes.active;
    let searchClass = "";
    if(props.searchSelected === true) {
         galleryClass = "";
         searchClass = classes.active;

    }

    return(

  <nav className={classes.topnav}>
    <a href="/" className={galleryClass}>Gallery</a>
    <a href="/search" className={searchClass}>Search</a>
    
  </nav>
    );
}

export default Navbar;