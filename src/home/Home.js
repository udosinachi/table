import React from 'react'
import {Div } from './style'

function Home(){
    return(
        <Div>
            <div className="hero-wrapper">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content-wrapper position-relative" style={{position: 'relative'}}>
                                <div className="hero-heading text-center" style={{textAlign: 'center'}}>
                                    <div className="section-heading">
                                        <h2 className="sec__title line-height-65" style={{lineHeight: '65px'}}>
                                            The #1 Job Board for Hiring Designers <br/> and Creative Professionals
                                        </h2>
                                        <p className="sec__desc line-height-30 font-weight-medium color-white-rgba" style={{lineHeight: '30px', fontWeight: 'medium', color: 'white'}}>
                                            Each month, more than 3 million job seekers turn to website in their search for work, <br/>
                                            making over 140,000 applications every single day
                                        </p>
                                    </div>
                                    <div className="btn-box margin-top-35px" style={{marginTop: '35px'}}>
                                        <a href="job-grid-view.html" className="theme-btn mr-2">Find a Job</a>
                                        <a href="employer-dashboard-post-job.html" className="theme-btn bg-3">Post a Job</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Home