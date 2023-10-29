import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5">
      <div className="text-center">
        <h3 className="text-3xl text-orange-500 font-semibold">Services</h3>
        <h2 className="text-5xl font-bold my-3">Our service area</h2>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
          autem placeat. Perspiciatis maiores
          <br /> fuga incidunt voluptatibus nemo vero numquam.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
