import React from 'react' 

const AboutHome = props => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-white mb-2">About</h2>
                <p className="page-section-subheading text-center mb-5">Here's a little story about me</p>
                
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">I'm a full stack developer with a focus on web development and mobile development especially hybrid mobile app. I'm hardworker, fast-leaner, and dedicated for all qualities i put forward in every project.</p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">Prefer to work in Bandung and with English environment to build my self becoming a professional web development guy.</p></div>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="{{ route('home.download') }}"><i className="fas fa-download mr-2"></i>Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default AboutHome 