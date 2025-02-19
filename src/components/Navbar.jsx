import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('menu');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar p-7 flex justify-between items-center'>
      <Link to='/'><img className='w-10  md:w-20  ' src={assets.logo} alt='' /></Link>
      <ul className='flex list-none gap-14 text-gray-500 text-lg ml-10'>
        <li onClick={() => { setMenu("home"); document.getElementById("home").scrollIntoView({ behavior: 'smooth' }); }} className={menu === 'home' ? "active" : ""}>home</li>
        <li onClick={() => {
          setMenu("menu");
          document.getElementById("explore-menu").scrollIntoView({ behavior: 'smooth' });
        }} className={menu === 'menu' ? "active" : ""}>menu</li>
        <li onClick={() => { setMenu("mobile-app"); document.getElementById("app-download").scrollIntoView({ behavior: 'smooth' }); }} className={menu === 'mobile-app' ? "active" : ""}>mobile-app</li>
        <li onClick={() => {
          setMenu("contact-us");
          document.getElementById("footer").scrollIntoView({ behavior: 'smooth' });
        }} className={menu === 'contact-us' ? "active" : ""} >contact us</li>
      </ul>
      <div className="flex items-center gap-12">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-3 min-h-3 bg-orange-500 rounded-md -top-2 -right-2"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-sm text-gray-500 border-2 border-orange-500 pl-5 pr-5 pt-1 pb-1 cursor-pointer rounded-3xl transition duration-300 hover:bg-slate-100"
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar