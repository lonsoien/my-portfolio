import Footer from "../layout/Footer";
import Kickscrew from '../../images/Kicks-crew-Mockup.jpg'
import Environment from '../../images/environmentbox-mockup.jpg'; 
import Digital from '../../images/Digital-mockup.jpg'; 
import sneakers from '../../images/sneakers-product.png'; 



function Portfolio() {
    return (
        <>
        <h2 className="louise">LOUISE ONSØIEN</h2>
        <h5>My projects and developments</h5>
        <div className="container">
            <img src={Environment} alt="mockup kickscrew" className="mockup" />
        </div>
        <div className="container">
        <a href="https://evironmentbox.netlify.app/" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-lonsoien" target="blank"><button className="view">View Code</button></a>
        <br></br>
        <br></br>
        <p>This is a Project Exam with real life client.</p>
        <p>The project was developed and created with real life client who wanted a new webpage
            for their business. 
            <p>Environmentbox is a innovative company who creates safe storage solutions for bicycles</p>
        </p>
        </div>
        <div className="container">
            <img src={Kickscrew} alt="mockup kickscrew" className="mockup" />
        </div>
        <div className="container">
        <button className="view">View Live</button>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/Semester2-project" target="blank"><button className="view">View Code</button></a>
        <br></br>
        <br></br>
        <p>This is a Semester Project I called Kicks Crew</p>
        <p>
            The goal was to create a ecommerce site with a given Strapi API from Noroff.
        </p>
        <p>For this project I created a sneakers website with ecommerce solutions and much focus on design</p>
        <p>(sadly the site is no longer hosted and unavailable)</p>
        <br></br>
        <br></br>
        <div className="container">
            <img src={sneakers} alt="mockup kickscrew" className="mockup" />
        </div>
        <br></br>
        <p>Example of product site</p>
        </div>
        <div className="container">
            <img src={Digital} alt="mockup kickscrew" className="mockup" />
        </div>
        <div className="container">
        <button className="view">View Live</button>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/js-frameworks" target="blank"><button className="view">View Code</button></a>
        <br></br>
        <br></br>
        <p>This is a Course Assignment from JS Frameworks studies.</p>
        <p>Here we learned React and Next, and was given a task to call a API to show, 
            and then redirect to a details page.</p>
            <p>(no live view)</p>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio; 