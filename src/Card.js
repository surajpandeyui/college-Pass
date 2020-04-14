import React from 'react'; 
import './style.css'; 
import './readliness.css'; 
import './bootstrap.min.css'; 

function Card(props) {
    return (
    <div className="Card">
    
        <section className="newest-classNamees">
                <div className="container">
                    <section className="single_video">
                        <div className="upcmngls">
                            <div>
                                <h2 className="new-className-heading" style={{marginLeft: "0px!important"}}>Upcoming Live Sessions</h2>
                            </div>
                        </div>
                    </section>
    
                    <div className="new-className">
                        <div className="row clas-row">
    
                            <div className="col-md-6 teacher-self-exp">
                                <a href="">
                                    <div className="title-img-sec">
                                        <img src={'assets/images/7.jpg'} alt={'img-7'} />
                                    </div>
                                    <div className="title-gradient-bottom"></div>
                                    <div className="title">
                                        <h6 className="title-text-h4">Lorum Ipsum</h6>
                                        <p className="title-text-p">Lorum Ipsum is a dummy text</p>
                                    </div>
                                </a>
                            </div>
    
                            <div className="col-md-6 teacher-self-exp">
                                <a href="">
                                    <div className="title-img-sec">
                                        <img src="assets/images/8.jpg" />
                                    </div>
                                    <div className="title-gradient-bottom"></div>
                                    <div className="title">
                                        <h6 className="title-text-h4">Lorum Ipsum</h6>
                                        <p className="title-text-p">Lorum Ipsum is a dummy text</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <div className="new-className">
                        <h2 className="new-className-heading">{props.sectionHeading}</h2>
                        <span className="catvm"><a href="categories.html">{props.catView}</a></span>
                        <div className="row clas-row">
    
                            <div className="col-md-6 teacher-self-exp">
                                <a href="play_video.html">
                                    <div className="title-img-sec">
                                        <img src="{props.secCardimage}" alt={'iprops.alt'}/>
                                    </div>
                                    <div className="title-gradient-bottom"></div>
                                    <div className="title">
                                    <h6 className="title-text-h4">{props.title}</h6>
                                    <p className="title-text-p">{props.discription}</p>
                                    </div>
                                </a>
                            </div>
    
                            <div className="col-md-6 teacher-self-exp">
                                <a href="play_video.html">
                                    <div className="title-img-sec">
                                        <img src="{props.secCardimage}" alt={'iprops.alt'}/>
                                    </div>
                                    <div className="title-gradient-bottom"></div>
                                    <div className="title">
                                    <h6 className="title-text-h4">{props.title}</h6>
                                    <p className="title-text-p">{props.discription}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    </div>
    ); }

    var app = (
        <div>
            <Card sectionHeading="Must Watch" catView="View More" secCardimage="assets/images/5.jpg" title="Neil deGrasse Tyson" discription="Teaches Scientific Thinking and Communication" />
        </div>
    );
    
    export default Card;