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
                                            Welcome to Fabled Funds <br/> 
                                        </h2>
                                        <p className="sec__desc line-height-30 font-weight-medium color-white-rgba">
                                            The Fabled Fund Marketplace is here to radically transform the way you spend money. <br/>
                                            Use hundreds of different payment methods to buy and sell bitcoin.
                                        </p>
                                    </div>
                                    <div className="btn-box margin-top-35px">
                                        <a href="job-grid-view.html" className="theme-btn mr-2">Buy</a>
                                        <a href="employer-dashboard-post-job.html" className="theme-btn bg-3">Sell</a>
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