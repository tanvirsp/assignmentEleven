const services = ["Hatha Yoga", "Vinyasa Yoga", "Yin Yoga"];

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="title">
          <h2>Start training with me</h2>
          <p>
            To continue making yoga accessible to everyone we offer classes
            online, in-person at our studio (mask required), and outdoors.
          </p>
        </div>
        <div>
          <ul className="service-item">
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
