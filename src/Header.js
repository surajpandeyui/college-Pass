import React from 'react';
import './style.css';
import './readliness.css'; 
import './bootstrap.min.css'; 

function Header() { return (
    <div className="Header">
    
        <section className="head-sec">
            <div className="warning-sec">
                <a href="http://3.6.6.220/collegepassApplicationNewUI/html/Welcome/My_profile">
                    <p class="title-text-p">Please fill basic details to get a better-personalized result.</p>
                </a>
            </div>
            <header className="header">
                <div className="container">
                    <a href="indexal.html" className="logo"><img src="assets/images/holo.png" /><img src="assets/images/chaseivy_logo.svg" class="f_logo" /></a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li className="top_login"><i className="icon-user" style={{color: "black", fontWeight: "900"}}></i><a className="trigger" href="#">Log in</a></li>
                        <li className="hvrdsp"><a href="#">My college plan</a>
                            <ul className="nav-dropdown">
                                <li>
                                    <a href="MyToDoList.html">My To-Do List</a>
                                </li>
                                <li>
                                    <a href="MyCollegeReadiness.html">My College Readiness</a>
                                </li>
                            </ul>
                        </li>
                        <li className="hvrdsp">
                            <a href="#"><img src="assets/images/menu-icon.png" className="menu-avatar" /></a>
                            <ul className="nav-dropdown">
                                <li>
                                    <a href="http://3.6.6.220/collegepassApplicationNewUI/html/Welcome/My_profile">My Profile</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    </div>

    ); } 
    
    export default Header;