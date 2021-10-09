import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import {useState} from 'react';
import logo from "../../../Assests/images/logo.png";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/" target="_blank"><i className="fa fa-twitter icon"></i></NavLink>
                    <NavLink to="/" target="_blank"><i className="fa fa-instagram"></i></NavLink>
                    <NavLink to="/" target="_blank"><i className="fa fa-youtube-play"></i></NavLink>
                    <NavLink to="/" target="_blank"><i className="fa fa-facebook"></i></NavLink>
                </li>
            </ul>
        </div>
    );
}

export default BurgerMenu;