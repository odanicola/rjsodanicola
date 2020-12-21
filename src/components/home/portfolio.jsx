import React from 'react' 

const PortfolioHome = props => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-primary mb-2">Portfolio</h2>
                <p className="page-section-subheading text-center mb-5">Check out all my portfolios i have been working on since 2013.</p>
                
                <div className="row" id="portfolio_row">
                    
                </div>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div id="div_loadmore">
                            <p>Please wait...<br/>
                                <img src="{{ asset('img/component/loader.gif') }}" alt=""/>
                            </p>
                        </div>
                        <button className="btn btn-secondary" id="btn_loadmore"><i className="fas fa-eye"></i> Load More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioHome