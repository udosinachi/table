import React from 'react'

function Home2(props){
    return(
        <div>
            <section className="cat-area padding-top-100px padding-bottom-110px text-center">
    <div className="container">
        <div className="row" >
            <div className="col-lg-12">
                <div className="section-heading">
                    <h2 className="sec__title">Find The Best Offers to Trade</h2>
                    <p className="sec__desc">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit <br/>
                        facere possimus, omnis voluptas assumenda est, omnis
                    </p>
                </div>
            </div>
        </div>
        <div className="row mt-5 justify-content-center">
            <div className="col-lg-3 column-td-6">
                <div className="category-item">
                    <a href="job-grid-view.html" className="cat-fig-box d-block p-4">
                        <div className="icon-element mb-3">
                            <i className="la la-paint-brush"></i>
                        </div>
                        <div className="cat-content">
                            <h4 className="cat__title mb-2">Design &amp; Multimedia</h4>
                            <span className="font-weight-medium">(3065)</span>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="btn-box text-center mt-4">
                    <a href="job-grid-view.html" className="theme-btn">Browse all Category</a>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Home2