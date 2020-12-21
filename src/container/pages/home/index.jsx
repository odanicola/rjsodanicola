import React from 'react' 
import Header from '../../../components/home/header'
import About from '../../../components/home/about'
import Portfolio from '../../../components/home/portfolio'

const Home = props => {
    return (
        <div>
            <Header {...props}/>
            <Portfolio {...props} />
            <About {...props}/>
        </div>
    )
}

export default Home