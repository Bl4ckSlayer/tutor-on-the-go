import Service from "../Service/Service";
import service1 from "../../../Images/service/service1.jpg";
import service2 from "../../../Images/service/service2.jpg";
import service3 from "../../../Images/service/service3.jpg";
import service4 from "../../../Images/service/service4.jpg";
import service5 from "../../../Images/service/service5.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "ENGINE DIAGNOSTIC",
      price: "300",
      description:
        "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
      img: service1,
    },
    {
      id: 2,
      name: "MACHINE LEARNING",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
      img: service2,
    },
    {
      id: 3,
      name: "DATA SCIENCE",
      price: "150",
      description:
        "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
      img: service3,
    },
    {
      id: 4,
      name: "ARTIFICIAL INTELLIGENCE",
      price: "180",
      description:
        "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
      img: service4,
    },
    {
      id: 5,
      name: "ROBOTICS",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
      img: service5,
    },
  ];

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
