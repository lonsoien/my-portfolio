import Footer from "../layout/Footer";
import Kickscrew from '../../images/Kicks-crew-Mockup.jpg'

function Portfolio() {
    return (
        <>
        <h1 style={{padding: "2rem", paddingLeft: "190px"}}>LOUISE ONSØIEN</h1>
        <h5>Text here about me and what I do</h5>
        <div style={{textAlign: "center"}}>
            <img src={Kickscrew} alt="mockup kickscrew" className="mockup" />
        </div>
        <div style={{textAlign: "center"}}>
        <button className="view">View Live</button>
        &nbsp;&nbsp;
        <button className="view">View Code</button>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio; 