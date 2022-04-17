import Service from "../Service/Service";

const Services = (props) => {
  const { services } = props;

  return (
    <div id="services" className="container">
      <h1 className="text-primary text-center mt-5"> Our Services</h1>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
