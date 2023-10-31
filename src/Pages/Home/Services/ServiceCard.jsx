import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title} </h2>
          <p>{price} </p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn rounded-md bg-red-500">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.any,
    img: PropTypes.any,
    price: PropTypes.any,
    title: PropTypes.any
  })
}

export default ServiceCard;
