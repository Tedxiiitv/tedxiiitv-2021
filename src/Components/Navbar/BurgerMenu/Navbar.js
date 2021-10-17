import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import {useState} from 'react';
import logo from "../../../Assests/Images/MobileLogo.png";
import { NavLink,Link } from "react-router-dom";

const BurgerMenu = ()=>{
    const [open,setOpen] = useState(false);
    return (
        <div className="burger-menu">
            <div className="burger-menu-logo">
                <div>
                    <NavLink to="/" className="logo">
                    <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div>
                    {!open && <i  className="fa fa-bars icon fa-1x" onClick={()=>setOpen(true)}></i>}
                    {open && <i className="fa fa-times icon fa-1x" onClick={()=>setOpen(false)}></i>}
                </div>
            </div>
            <ul className={(open?"show-burger-menu":"") + " burger-menu-item"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/spekers">Speaker</NavLink>
                </li>
                <li>
                    <NavLink to="/talks">Talks</NavLink>
                </li>
                <li>
                    <NavLink to="/team">Team</NavLink>
                </li>
                <li className="burger-menu-social-link">
                    <a href="https://twitter.com/tedxiiitv" target="_blank"><i className="fa fa-twitter icon"></i></a>
                    <a href="https://www.instagram.com/tedxiiitv" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g" target="_blank"><i className="fa fa-youtube-play"></i></a>
                    <a href="/" target="_blank"><i className="fa fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default BurgerMenu;