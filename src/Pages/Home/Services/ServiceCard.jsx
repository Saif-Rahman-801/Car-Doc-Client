
import PropTypes from "prop-types"
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
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
            <button className="btn rounded-md bg-red-500">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    img: PropTypes.any,
    price: PropTypes.any,
    title: PropTypes.any
  })
}

export default ServiceCard;
