import React from 'react'; 
import './style.css'; 
import './readliness.css'; 
import './bootstrap.min.css'; 

function Footer() { return (
    <div className="Footer">
    
        <section className="ftr-sec">
            <div className="container">
                <div className="footer">
                    <div className="col-md-4 mob-wid-set">
                        <div className="ftr-mnu explore">
                            <div className="ftr-mnu-h"><span>Explore</span></div>
                            <div className="ftr-mnu-l">
                                <ul>
                                    <li>
                                        <a href="#">className</a>
                                    </li>
                                    <li>
                                        <a href="#">Articles</a>
                                    </li>
                                    <li>
                                        <a href="#">Sitemap</a>
                                    </li>
                                    <li>
                                        <a href="#">Gifts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mob-wid-set">
                        <div className="ftr-mnu about">
                            <div className="ftr-mnu-h"><span>About</span></div>
                            <div className="ftr-mnu-l">
                                <ul>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="terms.html">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#">Enterprise</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftr-mnu social soc-b">
                            <div className="ftr-mnu-h"><span>Social</span></div>
                            <div className="ftr-mnu-l">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i> Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="ftr-mnu social soc-s">
                            <div className="ftr-mnu-h"><span>Social</span></div>
                            <div className="ftr-mnu-l">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="cpy-wrt">
            <div className="container">
                <div className="row copyright">
                    <div className="copy-e" style={{borderRight: "1px solid rgba(255, 255, 255, 0.3)",paddingRight: "1.6rem"}}>
                        <a href="indexal.html"><img src="assets/images/holo.png" className="c-logo" /></a>
                    </div>
                    <div className="copy-e ctt">
                        <a href="indexal.html"><img src="assets/images/chaseivy_logo.svg" /></a>
                    </div>
                    <div className="copy-e ctt">
                        <a href="#"><span className="cpy-m-20">&copy; 2020 CollegePass</span></a>
                    </div>
                </div>
            </div>
        </section>
    </div>

    ); } 
    
    export default Footer;