import React from 'react'

function Home(){
    return(
        <div>
            <div className="hero-wrapper">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content-wrapper position-relative">
                                <div className="hero-heading text-center">
                                    <div className="section-heading">
                                        <h2 className="sec__title line-height-65">
                                            The #1 Job Board for Hiring Designers <br/> and Creative Professionals
                                        </h2>
                                        <p className="sec__desc line-height-30 font-weight-medium color-white-rgba">
                                            Each month, more than 3 million job seekers turn to website in their search for work, <br/>
                                            making over 140,000 applications every single day
                                        </p>
                                    </div>
                                    <div className="btn-box margin-top-35px">
                                        <a href="job-grid-view.html" className="theme-btn mr-2">Find a Job</a>
                                        <a href="employer-dashboard-post-job.html" className="theme-btn bg-3">Post a Job</a>
                                    </div>
                                </div>
                                <div className="hero-form-wrap position-absolute">
                                    <div className="main-search-input">
                                        <div className="main-search-input-item">
                                            <div className="contact-form-action">
                                                <form action="#">
                                                    <div className="form-group mb-0">
                                                        <span className="la la-search form-icon"></span>
                                                        <input className="form-control" type="text" placeholder="Job title or company name"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="main-search-input-btn">
                                            <button className="button theme-btn border-0 line-height-56" type="submit">Search Jobs</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home