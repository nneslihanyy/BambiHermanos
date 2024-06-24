import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Proptypes from "prop-types";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";
const Header = ({ setIsSearchShow }) => {
  const user = localStorage.getItem("user");
  const { cartItems } = useContext(CartContext);
  const { pathname } = useLocation();
  return (
    <header>
     
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img src="img/logo.webp" alt="" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"} `}
                    >
                      Yeni Gelenler
                      <i className="bi bi-chevron-down"></i>
                    </Link>

                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"} `}
                    >
                      Kadın
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      } `}
                    >
                      Erkek
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            
                          
                            
                          </div>
                          <div className="megamenu-products">
                            
                          </div>
                          <div className="megamenu-products">
                           
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </li>
                  
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"} `}
                    >
                      Çanta
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    
                      
                  
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"} `}
                    >
                      Garage Sale
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      } `}
                    >
                      Blog
                    </Link>
                  </li>
                  
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => {
                    setIsSearchShow(true);
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a> */}
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if(window.confirm("Çıkış yapmak istediğinize emin misiniz?")){
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
