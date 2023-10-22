
import yoga from "../assets/images/hero-img.png";


const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-content">
                <h1>Your Personal  <span className="text-highlight">Yoga</span> Teacher</h1>
                <a className="btn-one" href="#">Join Now</a>
            </div>
            <div className="hero-section-img">
                <img src={yoga} alt="Yoga" />
            </div>
            
        </section>
    );
};

export default Hero;