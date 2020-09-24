import React from 'react'

function Footer(){
    return(
        <div>
            <section className="footer-area padding-top-90px padding-bottom-30px">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 column-td-6">
                <div className="footer-item">
                    <div className="logo">
                        <a href="index.html" className="foot-logo"><img src="images/logo2.png" alt="logo" /></a>
                        <p className="footer__desc line-height-30 mt-3">
                            Collin Street West, Victor 6007, Australia. <br />
                            +1 246-345-0695 <br />
                            info@Zobstar123.com
                        </p>
                        <h4 className="footer__title mt-4">Connect with us</h4>
                        <ul className="social-profile">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                               <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                              <a href="#">
                                    <i className="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-behance"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">Trade</h4>
                    <ul className="list-items">
                        <li><a href="#">Payment methods</a></li>
                        <li><a href="#">Trade Bitcoin(BTC)</a></li>
                        <li><a href="#">Trade Etherum(ETH)</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">About</h4>
                    <ul className="list-items">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Crypto newsletter</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">White paper</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">Community</h4>
                    <ul className="list-items">
                        <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i className="fa fa-facebook"></i> Twitter</a></li>
                        <li><a href="#"><i className="fa fa-facebook"></i> English Chat</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="copy-right margin-top-50px padding-top-30px">
                    <p className="copy__desc">
                        Copyright ©2020 Zobstar Inc. Made with
                        <span className="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                    </p>
                    <ul className="list-items">
                        <li className="color-text-2 font-weight-medium">Browse by:</li>
                        <li><a href="#">Companies,</a></li>
                        <li><a href="#">Jobs,</a></li>
                        <li><a href="#">Locations</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Footer