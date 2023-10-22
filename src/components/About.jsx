import aboutPic from '../assets/images/about-us.jpg'

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className='about-container'>
                    <div className='about-container-text'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin tempus tortor, ut venenatis sem. Donec quis fermentum neque. Suspendisse id lacus ac neque scelerisque pulvinar sit amet eu velit. Vivamus id augue magna..</p>
                        <a className="btn-one" href="#">Read More</a>
                    </div>
                    <div>
                        <img className='about-img' src={aboutPic} alt="About" />
                    </div>
                </div>
            </div>    
        </section>
    );
};

export default About;