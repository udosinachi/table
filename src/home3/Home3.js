import React from 'react'

function Home3(){
    return(
        <div>
            <section className="hiw-area text-center section-bg padding-top-100px padding-bottom-85px">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading">
                    <h2 className="sec__title">How Fabled Funds Works for You?</h2>
                    <p className="sec__desc">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit <br/>
                        facere possimus, omnis voluptas assumenda est, omnis
                    </p>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 column-td-6">
                <div className="icon-box">
                    <div className="icon-element">
                        <i className="la la-search-plus"></i>
                        <span className="info-number">1</span>
                    </div>
                    <div className="info-content mt-4" style={{marginTop: '2rem'}}>
                       <h4 className="info__title mb-3">Create an account</h4>
                        <p className="info__desc">
                        Sign up today — it only takes 30 seconds.<br/><br/>

                        If you're technically inclined, you can choose to sign up with an Ethereum wallet instead of a password.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 column-td-6">
                <div className="icon-box">
                    <div className="icon-element">
                        <i className="las la-comment-dollar"></i>
                        <span className="info-number">2</span>
                    </div>
                    <div className="info-content mt-4">
                        <h4 className="info__title mb-3">See who's buying and selling</h4>
                        <p className="info__desc">
                        Anyone can post a bid to buy or sell crypto. Find a buyer or seller who suits you.<br/><br/>
                        You can filter offers by payment method, currency, location, and popularity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 column-td-6">
                <div className="icon-box">
                    <div className="icon-element">
                        <i className="la la-rocket"></i>
                        <span className="info-number">3</span>
                    </div>
                    <div className="info-content mt-4">
                        <h4 className="info__title mb-3">Open a trade</h4>
                        <p className="info__desc">
                        After you find an offer you're happy with, open a trade with the user. Choose the amount you want to buy or sell, and lock in the price and be notified in less than 120 seconds
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Home3