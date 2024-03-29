import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

      const menu = <>

            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/contactUs"}>CONTACT US</NavLink></li>
            <li><NavLink to={"/dashboard"}>DASHBOARD</NavLink></li>
            <li><NavLink to={"/ourMenu"}>OUR MENU</NavLink></li>
            <li><NavLink to={"/ourShop"}>OUR SHOP <FaCartShopping /></NavLink></li>
            <li><NavLink to={"/signOut"}>SIGN OUT <FaUserCircle /></NavLink></li>

      </>

      return (
            <>
                  <div className="navbar bg-slate-700 bg-opacity-20 fixed z-10 max-w-7xl">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          {menu}
                                    </ul>
                              </div>
                              <a className="btn btn-ghost text-xl text-white">BISTRO BOSS</a>
                        </div>
                        <div className="navbar-end hidden text-[#F3CF38] lg:flex">
                              <ul className="menu menu-horizontal px-1 text-xs font-bold">
                                    {menu}
                              </ul>
                        </div>
                  </div>
            </>
      );
};

export default Navbar;