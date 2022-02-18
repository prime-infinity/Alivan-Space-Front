function Header() {
    return ( 
        <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
      
        <nav className="classy-navbar" id="essenceNav">
        
            <span className="nav-brand">Alivan Space</span>

            <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span></span><span></span><span></span></span>
            </div>
            
            <div className="classy-menu">
              
                <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>
              
                <div className="classynav">
                    <ul>
                        <li>
                            <button className="btn btn-like-link">Shop</button>
                        </li>
                        <li>
                            <button className="btn btn-like-link">Pages</button>
                        </li>
                        <li>
                            <button className="btn btn-like-link"> Blog</button>
                        </li>
                        <li>
                            <button className="btn btn-like-link">Contact</button>
                        </li>
                    </ul>
                </div>
                
             
            </div>
        </nav>
      
        <div className="header-meta d-flex clearfix justify-content-start">
           
            <div className="search-area">
                <form>
                    <input type="search"/>
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>

            <div className="container-fluid d-flex justify-content-end">

                <div className="favourite-area">
                    <a href="#/"><img src="assets/img/core-img/heart.svg" alt="" /></a>
                </div>
            
                <div className="user-login-info">
                    <a href="#/"><img src="assets/img/core-img/user.svg" alt="" /></a>
                </div>
            
                <div className="cart-area">
                    <a href="#/" id="essenceCartBtn"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
                </div>

            </div>
            
        </div>


    </div>
</header>
     );
}

export default Header;