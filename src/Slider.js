import React from 'react'; 
import './style.css'; 
import './readliness.css'; 
import './bootstrap.min.css'; 

function Slider() { return (
    <div className="Slider">
    
        <section className="slider-sec">
            <div className="hero-section">
                <img src={'assets/images/banner_al.gif'} alt="Banner" />
    
                <div className="container top-bnnr">
                    <div className="row">
                        <div className="col-md-8 banner-cont">
                            <h1>Learn from the best in the world.</h1>
                            <h5>INR 699/month (billed annually)</h5>
                            <a href="#">Lorum ipsum</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    ); }
    
    export default Slider;