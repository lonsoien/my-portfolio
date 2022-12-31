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
                <br></br>
                <br></br>
                <h5>So who am I?</h5>
                <p>Im a bubbely person who loves to envolve and learn new things.</p>
                <p>This is a field of great interest, and im very passionate about what I do</p>
                <p>I am easy to get along with, love to work with other people and in teams, but also have the need to lock my self inside my own "bubble" to get that creative mindset.</p>
                <p>I work hard, are organized and like to have a detailed overview on my projects.</p>
                <p>Dont be afraid to contact me for enquirements.</p>
                <p>(contact form will be up soon)</p>
        </div>
        <br></br>
        <Footer />
        </>
    )
}

export default About; 