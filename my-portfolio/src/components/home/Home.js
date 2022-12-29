import Footer from "../layout/Footer";
import sneakers from '../../images/sneakers-product.png'

function Home() {
  return (
    <>
    <h2 className="louise">LOUISE ONSØIEN</h2>
    <div className="container">
      <h1>A Frontend Developer</h1>
      <br></br>
      <br></br>
            <img src={sneakers} alt="mockup kickscrew" className="mockup" />
        </div>
    <Footer />
    </>
  );
}

export default Home; 