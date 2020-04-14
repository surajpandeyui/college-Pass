import React from 'react'; 
import './style.css'; 
import './readliness.css'; 
import './bootstrap.min.css'; 

function Content() { return (
    <div className="Content">
    
        <div className="site-wrap page-id-2">
    
            <section className="mob-h-m">
                <div className="container">
                    <h2 className="new-className-heading">Learn from the best in the world.</h2>
                    <a href="#" className="mob-h-m-btn">Get Started</a>
                </div>
            </section>
    
            <section className="client" id="show-menu-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cls_top">
                                <h2 className="">75+ classNamees</h2>
                                <p className="">From the masters</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cls_top">
                                <h2 className="">20 Lessons</h2>
                                <p className="">Average per className</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cls_top">
                                <h2 className="">10 Minutes</h2>
                                <p className="">Average per lesson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    ); } 
    
    export default Content;