import React from 'react' 
import { PhotoProfile } from '../../assets/images'

const HeaderHome = props => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-2 rounded-circle profile" src={PhotoProfile} alt="" />
                <h1 className="masthead-heading mb-0 mt-3">Oda Aditiya Nicola</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Web & Mobile App Developer</p>
            </div>
        </header>
    )
}

export default HeaderHome