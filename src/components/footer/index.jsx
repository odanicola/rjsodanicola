import React from 'react' 

const Footer = props => {
    return (
        <footer className="footer text-center" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">Baleendah, Kab. Bandung, Jawabarat<br />Indonesia, 40375</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Find me on Social</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/odanicola/?hl=en"><i className="fab fa-fw fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://wa.me/085722574416?text=Hello,%20Oda.%20Saya%20/%20I%20am%20....%20"><i className="fab fa-fw fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="mailto:odanicola@gmail.com"><i className="fab fa-fw fa-google"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/odanicola"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/oda-aditiya-nicola-29643857/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Quotes</h4>
                        <p className="lead mb-0">“Live as if you were to die tomorrow".</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer