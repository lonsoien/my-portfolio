import Footer from "../layout/Footer";

function About() {
    return (
        <>
        <h2 className="louise">LOUISE ONSØIEN</h2>
        <div className="container">
            <h5>Hello there and welcome to my portfolio!</h5>
            <br></br>
            <h5>My name is Louise and I am Currently living in Oslo.</h5>
            <br></br>
            <h5>I am a fresh frontend developer who is gratuaded from 
                Noroff School of Technology and digital in 2022.</h5>
                <br></br>
                <h5>My skills are:</h5>
                <br></br>
                <ul className="list-unstyled">
                <li><p>HTML, JS, CSS</p></li>
                <li><p>SASS, Bootstrap</p></li>
                <li><p>React, Next</p></li>
                <li><p>Wordpress</p></li>
                <li><p>Adobe Package</p></li>
                </ul>
        </div>
        <br></br>
        <Footer />
        </>
    )
}

export default About; 