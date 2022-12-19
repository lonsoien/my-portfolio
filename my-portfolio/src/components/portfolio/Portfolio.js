import Footer from "../layout/Footer";
import Kickscrew from '../../images/Kicks-crew-Mockup.jpg'
import Environment from '../../images/environmentbox-mockup.jpg'; 



function Portfolio() {
    return (
        <>
        <h2 className="louise">LOUISE ONSØIEN</h2>
        <h5>Text here about me and what I do</h5>
        <div className="container">
            <img src={Environment} alt="mockup kickscrew" className="mockup" />
        </div>
        <div className="container">
        <button className="view">View Live</button>
        &nbsp;&nbsp;
        <button className="view">View Code</button>
        </div>
        <div className="container">
            <img src={Kickscrew} alt="mockup kickscrew" className="mockup" />
        </div>
        <div className="container">
        <button className="view">View Live</button>
        &nbsp;&nbsp;
        <button className="view">View Code</button>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio; 